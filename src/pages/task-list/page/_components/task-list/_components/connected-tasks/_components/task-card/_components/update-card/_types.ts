export type UpdateFormValues = {
  name: string;
  description: string;
};

export type HandleUpdateParamsType = {
  onSuccess: () => void;
  uuid: string;
} & UpdateFormValues;
