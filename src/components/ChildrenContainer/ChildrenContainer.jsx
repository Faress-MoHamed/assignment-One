import React from "react";

const ChildrenContainer = ({ children, className = "" }) => {
	return (
		<section
			className={`container ml-auto max-w-7xl 
                  lg:w-4/5 w-full 
                  lg:px-12 lg:py-16 p-5 lg:mt-5 mt-3
                  ${className}`}
		>
			{children}
		</section>
	);
};

export default React.memo(ChildrenContainer);
