import { Info } from "lucide-react";
import React from "react";

type FormSuccessProps = {
  message?: string;
};

const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;
  return (
    <div className="bg-green-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <Info className="w-4 h-4" />
      {message}
    </div>
  );
};

export default FormSuccess;
