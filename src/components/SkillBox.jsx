
const SkillBox = ({heading , skills}) => {
  return (
    <div className="border border-gray h-fit">
        <div className="border-b p-3 border-b-gray">
        <p className="text-center">{heading}</p>
        </div>
        <div className="p-3 text-gray">
            {skills.map((item , index) => <p key={index}>{item}</p>)}
        </div>
    </div>
  )
}

export default SkillBox;