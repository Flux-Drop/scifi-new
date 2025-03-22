"use client";

import { useRef, useState } from "react";
import { toast } from "sonner";
import { IKImage, ImageKitProvider, IKUpload } from "imagekitio-next";
import config from "@/lib/config";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface FileUploadProps {
  type: "image";
  accept: string;
  placeholder: string;
  folder: string;
  onFileChange: (filePath: string) => void;
  value?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  accept,
  folder,
  onFileChange,
  placeholder,
  type,
  value,
}) => {
  const {
    env: {
      imageKit: { publicKey, privateKey, urlEndpoint },
      apiEndpointDev,
      apiEndpointProd,
    },
  } = config;

  const ikUploadRef = useRef(null);
  const [file, setFile] = useState<{ filePath: string | null }>({
    filePath: value ?? null,
  });
  const [progress, setProgress] = useState<number>(0);

  const authenticator = async () => {
    try {
      const response = await fetch(`${apiEndpointDev}/api/auth/imagekit`);
      if (!response.ok) {
        const errorText = await response.text();

        throw new Error(
          `Request Failed ith status code ${response.status}: ${errorText}`
        );
      }
      const data = await response.json();
      const { signature, expire, token } = data;
      return {
        token,
        expire,
        signature,
      };
    } catch (error: any) {
      throw new Error(`Authentication request failed: ${error.message}`);
    }
  };
  const onError = (error: any) => {
    console.log(error);

    toast.error(`${type} upload failed`);
  };

  const onSuccess = (res: any) => {
    setFile(res);
    onFileChange(res.url);
    toast.success(`${type} uploaded successfully`);
  };

  const onValidate = (file: File) => {
    if (type === "image") {
      if (file.size > 20 * 1024 * 1024) {
        toast.error("Image size should not exceed 20MB");
        return false;
      }
    }
    return true;
  };
  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload
        ref={ikUploadRef}
        className="hidden"
        onError={onError}
        validateFile={onValidate}
        onSuccess={onSuccess}
        fileName="test-upload.png"
        onUploadStart={() => setProgress(0)}
        onUploadProgress={({ loaded, total }) => {
          const percent = Math.round((loaded / total) * 100);
          setProgress(percent);
        }}
        folder={folder}
        accept={accept}
      />

      {progress > 0 && progress < 100 && (
        <div className="w-full rounded-full bg-green-200 my-2">
          <div
            className="rounded-full bg-green-800 p-2 text-center text-[8px] font-bold leading-none text-white"
            style={{ width: `${progress}%` }}
          >
            {progress}%
          </div>
        </div>
      )}

      <button
        className="flex min-h-14 w-full items-center justify-center gap-1.5 rounded-md bg-white text-black text-base font-semibold cursor-pointer flex-col py-2"
        onClick={(e) => {
          e.preventDefault();
          if (ikUploadRef.current) {
            // @ts-ignore
            ikUploadRef.current?.click();
          }
        }}
      >
        <div className="flex gap-1.5 items-center justify-center py-2">
          <Image
            src={"/icons/admin/upload.svg"}
            alt="upload"
            width={20}
            height={20}
            className={`object-contain  ${file.filePath ? "hidden" : ""}`}
          />
          <p
            className={`text-base text-gray-700  ${
              file.filePath ? "hidden" : ""
            }`}
          >
            Upload an Image
          </p>
        </div>
        {file.filePath && (
          <p className="mt-1 text-center text-xs">{file.filePath}</p>
        )}
        {file.filePath && (
          <IKImage
            alt={file.filePath!}
            path={file.filePath!}
            width={500}
            height={500}
          />
        )}
      </button>
      {file.filePath && (
        <Button
          variant={"destructive"}
          onClick={() => {
            setFile({ filePath: null });
            onFileChange("");
          }}
          className="w-full mt-2 text-white"
        >
          Discard
        </Button>
      )}
    </ImageKitProvider>
  );
};

export default FileUpload;
