const Results = (props) => {
  const { details, state } = props;
  let data;
  //   let id;
//   console.log(state);

  if (state === "people") {
    data = details?.person; //details&&details.person
    const emptyImg = details?.person?.image;//details&&details.person&&details.person.image
    const emptyCountry = details?.person?.country;//details&&details.person&&details.person.country
    if (emptyImg === null || emptyCountry === null) {
      return null;
    }
    // id=details?.person?.id
  } else if (state === "shows") {
    data = details?.show; //details&&details.show
    const emptyImgCheck = details?.show?.image; //details&&details&&show&&details.show.image
    const emptySummaryCheck = details?.show?.summary;//details&&details&&show&&details.show.image
    // const emptyPremierCheck = details?.show?.premiered;
    if (
      emptyImgCheck === null ||
      emptySummaryCheck === "" ||
      emptySummaryCheck === null 
    //   ||
    //   emptyPremierCheck === null
    ) {
      return null;
    }
    // id=details?.show?.id
  }

  const images = data?.image ? data.image.medium : ""; //data&&data.image?data.image.medium : "";
//   console.log(data);
  return (
    <a
      href={data?.url}
      target="blank"
      className="transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-black duration-200 flex flex-col items-center  mb-24  shadow-xl shadow-black rounded-xl border-2 border-gray-500"
    >
      <h2 className="text-center text-white pb-2 text-3xl font-serif pt-2">{data.name}</h2>

      <img className="w-80 h-80 rounded-md shadow-white" src={images} alt="" />
      {data.summary && (
        <div className="h-28 overflow-auto px-4 text-white font-mono pt-2 ">
          <div dangerouslySetInnerHTML={{ __html: data.summary }} />
        </div>
      )}
    </a>
  );
};

export default Results;
