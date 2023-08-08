// @flow strict

function Service() {
    return (
        <div className="flex flex-col items-center my-10" id="services">
            <p className="text-4xl max-md:text-xl font-semibold text-gray-700">Our Amazing Services</p>
            <p className="mt-4 text-lg max-md:text-center">Get High quality, responsive and searchable websites through our services.</p>
            <div className="grid grid-cols-3 max-md:grid-cols-1 max-md:w-[90vw] gap-10 mb-4 mt-14">
                <div className="flex border-[1px] py-10 px-8 rounded-lg">
                    <i className="ri-computer-line text-3xl text-blue-700"></i>
                    <div className="ml-2 w-[200px]">
                        <p className="text-blue-700 text-lg font-semibold">Responsive Mobile Optimization</p>
                        <p className="mt-1">Get great website on mobile phone and desktops.</p>
                    </div>
                </div>
                <div className="flex border-[1px] py-10 px-8 rounded-lg">
                    <i className="ri-search-line text-3xl text-blue-700"></i>
                    <div className="ml-2 w-[200px]">
                        <p className="text-blue-700 text-lg font-semibold">Search Engine Friendly</p>
                        <p className="mt-1">Your website would be access and search through google and other search engine by your customers.</p>
                    </div>
                </div>
                <div className="flex border-[1px] py-10 px-8 rounded-lg">
                    <i className="ri-coins-line text-3xl text-blue-700"></i>
                    <div className="ml-2 w-[200px]">
                        <p className="text-blue-700 text-lg font-semibold">Affordable</p>
                        <p className="mt-1">Get started at affordable prices.</p>
                    </div>
                </div>
                <div className="flex border-[1px] py-10 px-8 rounded-lg">
                    <i className="ri-star-line text-3xl text-blue-700"></i>
                    <div className="ml-2 w-[200px]">
                        <p className="text-blue-700 text-lg font-semibold">Maintenance</p>
                        <p className="mt-1">Get your website maintained with experts with 24/7 assistance.</p>
                    </div>
                </div>
                <div className="flex border-[1px] py-10 px-8 rounded-lg">
                    <i className="ri-lock-line text-3xl text-blue-700"></i>
                    <div className="ml-2 w-[200px]">
                        <p className="text-blue-700 text-lg font-semibold">Security</p>
                        <p className="mt-1">Get your website configured and secured and safe for your viewers and customers.</p>
                    </div>
                </div>
                <div className="flex border-[1px] py-10 px-8 rounded-lg">
                    <i className="ri-history-line text-3xl text-blue-700"></i>
                    <div className="ml-2 w-[200px]">
                        <p className="text-blue-700 text-lg font-semibold">Renewal</p>
                        <p className="mt-1">Get your website renewed and updated</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;