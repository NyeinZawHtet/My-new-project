export default function Contact() {
  return (
    <div>
      <div>
        <div class="flex-col-wrap bg-gray-200 pb-5 py-3">
          <p class="text-2xl font-bold text-gray-700 flex justify-center">
            Contact Us
          </p>
          <p class="flex flex-col-wrap justify-center">
            Lorem ipsum dolor Quos, distinctio sed! Aspernatur voluptatum
            voluptas cumque eos totam alias placeat quasi consectetur
            adipisicing
          </p>
          <p class="flex justify-center">nicumque ipsa voluptates vitae.</p>
        </div>
        <div>
          <div>
            <form>
              <div class="flex justify-between mt-10 w-full">
                <p class="w-full px-3 mr-10 pb-2 ml-20">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    class="block uppercase tracking-wide block w-full bg-gray-300 text-green-700 text-xs font-bold mb-2"
                    id="name"
                    placeholder="Name"
                    required
                  />
                </p>

                <p class="w-full px-3 mr-20">
                  <label for="email">Email</label>
                  <input
                    type="text"
                    class="block uppercase tracking-wide block w-full bg-gray-300 text-gray-700 text-xs font-bold mb-2"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </p>
              </div>
              <p class="w-90 px-3 mr-20 ml-20 pb-2">
                <label for="subject">Subject</label>
                <input
                  type="text"
                  class="text-s font-bold appearance-none block w-full bg-gray-300 text-gray-700 border border-green-800 rounded py-3 px-4 mb-3 leading-tight"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </p>
              <p class="w-90 px-3 mr-20 ml-20">
                <label for="message">Message</label>
                <textarea
                  id="address"
                  class="text-s font-bold appearance-none block w-full bg-gray-300 text-gray-700 border border-green-800 rounded py-3 px-4 mb-3 leading-tight"
                  placeholder="Message"
                  required
                ></textarea>
              </p>
              <p class="flex justify-end mr-24 mb-15 pb-10">
                <input
                  type="submit"
                  class="bg-slate-300 hover:bg-gray-400 text-center text-gray-700 text-s font-bold rounded py-2 px-4"
                  value="Let's Talk"
                />
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
