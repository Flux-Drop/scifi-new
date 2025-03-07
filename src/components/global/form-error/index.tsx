import { Info } from "lucide-react";
import React from "react";

type FormErrorProps = {
  message?: string;
};

const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;
  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <Info size={16} />
      {message}
    </div>
  );
};

export default FormError;
