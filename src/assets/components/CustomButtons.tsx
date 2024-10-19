

interface CustomButtonsProps {
    name: string;
    type: string;
    onButtonClick?: (e: any) => void;
    className?: string
    }

const CustomButtons = (props: CustomButtonsProps) => {
  return (
      <button 
        className={props.className}
          name={props.name}
          type={props.type as "submit" | "reset" | "button" | undefined}
          onClick={(e) => props.onButtonClick && props.onButtonClick(e)}
      >
        {props.name}
      </button>
  )
}

export default CustomButtons
