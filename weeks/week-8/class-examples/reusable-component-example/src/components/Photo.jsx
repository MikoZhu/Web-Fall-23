import '../index.css'

export const Photo = ({ mode, color, source }) => {
  return (
    <img src={source} className={`photo ${color} ${mode}`} />
  )
}
