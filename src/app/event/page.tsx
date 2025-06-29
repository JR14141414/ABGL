import HeaderBar from "@/components/headerBar"

export default function Event() {
    return (
        <div>
            <HeaderBar></HeaderBar>

        <div className="w-full mb-8">
          <img
            src="/course-banner.jpg"
            alt="Course Banner"
            width={1200}
            height={300}
            className="w-full h-auto object-cover rounded-xl shadow-md hover:shadow-lg transition duration-300"
          />
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Left text area */}
          <div className="md:col-span-3">
            <div className="text-gray-700 text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              fringilla, lacus a tristique volutpat, tellus lorem egestas nisl,
              at sollicitudin lacus velit ut arcu. Cras lobortis metus nec
              pretium dapibus. Sed vitae enim at lacus tincidunt gravida.
            </div>
          </div>

          {/* Right image */}
          <div>
            <img
              src="/side-image.jpg"
              alt="Side Image"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    )
}