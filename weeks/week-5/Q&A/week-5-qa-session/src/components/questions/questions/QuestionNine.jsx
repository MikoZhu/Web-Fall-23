export const QuestionNine = ({ title, number }) => {
  const image = { height: "200px", url: "image_url", width: "300px" };
  const objArray = [...Object.values(image)]; // This accesses the image variable using the values method of the Object constructor, and with the spread operator, it creates a copy of the object, converting it into an array. 😊
  console.log(`
  My new copy in array form:
    ${objArray}`);

  const content = {
    context:
      "This error occurs in React when you try to render an object directly. React expects children to be elements or arrays, not objects. To resolve this, you can access the properties of the object and render them individually or convert the object to an array and map over it to render its properties.",
    bulletpoints: [
      {
        id: 1,
        title: "For example, if you have an object like this:",
        point: `const image = { height: '200px', url: 'image_url', width: '300px' }`,
      },
      {
        id: 2,
        title: "You can't do this:",
        point: "<div>{image}</div> // This will throw an error",
      },
      {
        id: 3,
        title: "Instead, do something like this:",
        point: `<div><img src={image.url} alt="description" height={image.height} width={image.width} /></div>`,
      },
      {
        id: 4,
        title:
          "One of many ways is turning your object into an array using the spread operator, let's see an example on how to use the above object called image and lets turn it into an array to bee able to map. We will be using the actual values cause thats what we want, and lastly we will use the Object constructor keyword which enables you to create a new object, which then combined with the spread op it transforms it into an array to be able to map through it and get the info",
        point: `const objArray = [...Object.values(obj)];`,
      },
    ],
  };
  return (
    <div className="question-outer-container">
      <details>
        <summary>
          {number} - {title}
        </summary>
        <>
          <p>{content.context}</p>
          {content.bulletpoints.map((bulletPoint) => (
            <ul key={bulletPoint.id}>
              <>
                <h4>{bulletPoint.title}</h4>
                <li>{bulletPoint.point}</li>
              </>
            </ul>
          ))}
          <hr />
          <>
            <p>This is the result of the jsx logic</p>
            {objArray.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </>
        </>
      </details>
    </div>
  );
};
