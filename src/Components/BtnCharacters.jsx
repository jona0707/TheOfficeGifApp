export const BtnCharacters = ({c, handleOnSubmit}) => {
  const handleClick = () => {
    handleOnSubmit(c);
  }

  return (
    <button className="btn" onClick={handleClick} value={c}>{c}</button>
  )
}
