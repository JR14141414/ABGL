import HeaderBar from "@/components/headerBar"

export default function Event() {
    return (
        <div>
            <HeaderBar></HeaderBar>

        <div className="w-full mb-8">
          <img
            src="rules_banner.jpg"
            alt="Course Banner"
            className="w-full max-w-4xl rounded-2xl shadow-lg overflow-hidden centered mx-auto object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-3">
            <div className="text-gray-700 text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              fringilla, lacus a tristique volutpat, tellus lorem egestas nisl,
              at sollicitudin lacus velit ut arcu. Cras lobortis metus nec
              pretium dapibus. Sed vitae enim at lacus tincidunt gravida.
            </div>
          </div>

          <div>
            <img
              src="test_image_1.jpg"
              alt="Side Image"
              className="w-full h-auto object-cover"
            />

            <div className="flex rounded-2xl w-30 h-10 bg-foreground items-center justify-center justify-self-center mt-3">
              <p className="text-background">RSVP</p>
            </div>

          </div>
        </div>
      </div>
    )
}