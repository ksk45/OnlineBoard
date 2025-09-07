type UIErrorFieldProps = {
  errorMessage: string;
};

const UIErrorField = (props: UIErrorFieldProps) => {
  return (
    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
      {props.errorMessage}
    </div>
  );
};

export default UIErrorField;