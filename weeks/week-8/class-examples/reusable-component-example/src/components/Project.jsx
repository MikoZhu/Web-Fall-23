import { Photo } from '../components/Photo'

export const Project = ({ name, photo, tags }) => {
  return (
    <>
      <h2>{name}</h2>
      <Photo
        source={photo}
        color="blue"
        mode="square"
      />
      {tags.map((tag) => {
        return (
          <p key={tag} className="tag">{tag}</p>
        )
      })}
    </>
  )
}
