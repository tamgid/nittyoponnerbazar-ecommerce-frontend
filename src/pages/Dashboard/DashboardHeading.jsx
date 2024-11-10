import PropTypes from "prop-types";

const DashboardHeading = ({heading,subheading}) => {
    return (
        <div className="px-3 md:px-8">
             <h1 className="text-left  text-lg md:text-2xl text-slate-800 font-semibold">{heading}</h1>
             <p className="text-sm md:text-md text-neutral-600 max-w-4xl">{subheading}</p>
        </div>
    );
};

DashboardHeading.propTypes = {
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string,
}

export default DashboardHeading;