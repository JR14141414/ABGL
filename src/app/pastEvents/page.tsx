import HeaderBar from "@/components/headerBar";

export default function PastEvents() {
  return (
    <div className="min-h-screen">
    <HeaderBar></HeaderBar>
    <div id="header-bar">
    </div>

    <main className="p-6 grid grid-cols-5 gap-6 items-start text-white">
      <div className="col-span-4 space-y-4 flex flex-col items-center">
        <img
          src="/test_image_1.jpg"
          alt="Event Banner"
          className="w-auto h-auto max-h-[400px] rounded-xl shadow-md"
        />

        <div className="overflow-x-auto bgray-800 rounded-xl">
          <table className="w-auto table-auto border border-gray-600 mx-auto">
            <thead className="bg-gray-700 text-white">
              <tr>
                <th className="border border-gray-600 px-4 py-2 text-left whitespace-nowrap">Position</th>
                <th className="border border-gray-600 px-4 py-2 text-left whitespace-nowrap">Name</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-900">
                <td className="border border-gray-700 px-4 py-2">1st</td>
                <td className="border border-gray-700 px-4 py-2">Alice</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="border border-gray-700 px-4 py-2">2nd</td>
                <td className="border border-gray-700 px-4 py-2">Bob</td>
              </tr>
              <tr className="bg-gray-900">
                <td className="border border-gray-700 px-4 py-2">Sapphrie</td>
                <td className="border border-gray-700 px-4 py-2">Charlie</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="border border-gray-700 px-4 py-2">Emerald</td>
                <td className="border border-gray-700 px-4 py-2">Dana</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="col-span-1 space-y-4">
        <div className="flex justify-end">
          <select className="bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 align-middle">
            <option>Event A</option>
            <option>Event B</option>
            <option>Event C</option>
          </select>
        </div>

        <p className="text-white">
          Welcome to the event! This is a placeholder paragraph with some text to simulate the content area beside the image. Feel free to replace this with your actual event description or instructions.
        </p>
      </div>
    </main>
  </div>
);
};