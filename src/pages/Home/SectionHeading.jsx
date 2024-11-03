import PropTypes from "prop-types";

const SectionHeading = ({heading,subheading}) => {
    return (
        <div className="px-2">
            <div className=" my-5 py-5 max-w-4xl mx-auto px-2">
            <h1 className="text-center text-slate-800  font-semibold text-4xl ">{heading}</h1>
            <p className="text-center text-lg text-neutral-600 mt-2">{subheading}</p>
            </div>
        </div>
    ); 
};
SectionHeading.propTypes = {
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string,
}

export default SectionHeading;