export default function Home() {
  return (
    <div>
      <div className="home page flex justify-between bg-slate-400 pb-5 pt-3 md:text-gray-600">
        <div className="text-4xl flex item start mr-4">Zay</div>
        <div className="flex justify-around">
          <div className="mr-10">Home</div>
          <div className="mr-10">About</div>
          <div className="mr-10">Shop</div>
          <div className="mr-10">Contact</div>
        </div>
        <div className="">
          <i className="fa-solid fa-cart-shopping mr-6"></i>
          <i className="fa-solid fa-magnifying-glass-location mr-6"></i>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#efefef" }}
        id="default-carousel"
        className="relative w-full bg-white-100"
        data-carousel="slide "
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/assets/watch.jpg"
              className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 right-3 w-80 h-60"
              alt="..."
            />
            <figcaption className="absolute px-4 text-lg text-white left-50 right-1/2 top-40 bottom-30">
              <div className="flex-col-wrap md:480px">
                <p className="text-red-500">
                  <b>Zay</b> e<b>COMMERCE</b>
                </p>
                <p className="text-red-400">
                  <b>Ipsum ea expedita laborum placeat Amet dolorem </b>
                </p>
                <p className="text-red-400">
                  <b>amet consectetur adipisicing elit nkht fjier adilenf</b>
                </p>
                <p className="text-red-400">
                  <b>deserunt eum libero</b>
                </p>
              </div>
            </figcaption>
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/assets/boots.jpg"
              className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 right-3 w-80 h-60"
              alt="..."
            />
            <figcaption className="absolute px-4 text-lg text-white left-50 right-1/2 top-40 bottom-30">
              <div className="flex-col-wrap ">
                <p className="text-red-500">
                  <b>Zay</b> e<b>COMMERCE</b>
                </p>
                <p className="text-red-400">
                  <b>Ipsum ea expedita laborum placeat Amet dolorem </b>
                </p>
                <p className="text-red-400">
                  <b>amet consectetur adipisicing elit nkht fjier adilenf</b>
                </p>
                <p className="text-red-400">
                  <b>deserunt eum libero</b>
                </p>
              </div>
            </figcaption>
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/assets/Curlogy.jpg"
              className="absolute block  -translate-x-1/2 -translate-y-1/2 top-1/2 right-3 w-80 h-60"
              alt="..."
            />
            <figcaption className="absolute px-4 text-lg text-white left-50 right-1/2 top-40 bottom-30">
              <div className="flex-col-wrap ">
                <p className="text-red-500">
                  <b>Zay</b> e<b>COMMERCE</b>
                </p>
                <p className="text-red-400">
                  <b>Ipsum ea expedita laborum placeat Amet dolorem </b>
                </p>
                <p className="text-red-400">
                  <b>amet consectetur adipisicing elit nkht fjier adilenf</b>
                </p>
                <p className="text-red-400">
                  <b>deserunt eum libero</b>
                </p>
              </div>
            </figcaption>
          </div>
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-3 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
        </div>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      <div>
        <div className="text-center text-4xl mt-20">
          Categories of the Months
        </div>
        <div className="text-center mt-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
          accusantium atque reiciendis deleniti accusamus reprehende debitis hic
          maiores quis!
        </div>
        <div className="flex justify-around mt-10">
          <div className="text-center">
            <img src="/assets/glass.jpg" className="w-60 h-60" />
            <b>
              <p>Glasses</p>
            </b>
            <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              go shop
            </button>
          </div>
          <div className="text-center">
            <img src="/assets/Shoe.jpg" className="w-60 h-60" />
            <b>
              <p>Shoe</p>
            </b>
            <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              go shop
            </button>
          </div>
          <div className="text-center">
            <img src="/assets/watch.jpg" className="w-60 h-60" />
            <b>
              <p>Watch</p>
            </b>
            <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              go shop
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-400 bg-dark-blue-300">
        <div>
          <div className="text-center text-4xl mt-20 ">Feature Products</div>

          <div className="text-center mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        <div className="flex justify-around mt-10 bg-gray-400 bg-dark-blue-300">
          <div>
            <img src="/assets/Gym Weight.jpg" className="w-80 h-65"></img>
            <div className="mt-2">
              <div className="flex justify-between">
                <div className="flex justify-center">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <div className="text-gray-600">$51.68</div>
              </div>
              <p>
                <b>Gym Weight</b>
              </p>
              <div className="flex-col-wrap ">
                <p>Lorem ipsum dolor sit .</p>
                <p>reiciendis laboriosam eaque,</p>
                <p>voluptate at dicta id nesciunt.</p>
              </div>
              <div className="mt-4 text-gray-600 ml-4 mb-3">
                <p>Reviews(74)</p>
              </div>
            </div>
          </div>
          <div>
            <img src="/assets/Cloud Nike Shoe.jpg" className="w-80 h-60"></img>
            <div className="mt-2">
              <div className="flex justify-between">
                <div className="flex justify-center">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <div className="text-gray-600">$67.66</div>
              </div>
              <p>
                <b>Cloud Nike Shoe</b>
              </p>
              <div className="flex-col-wrap">
                <p>sit amet consectetur adipisici</p>
                <p>Est pariatur repellendus.</p>{" "}
                <p>Saepe nihil eligendi omnis </p>
              </div>
              <div className="mt-4 text-gray-600 ml-4 mb-3">
                <p>Reviews(48)</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/assets/Summer Addides Shoe.jpg"
              className="w-80 h-60"
            ></img>
            <div className="mt-2">
              <div className="flex justify-between">
                <div className="flex justify-center">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <div className="text-gray-600">$41.55</div>
              </div>
              <p>
                <b>Summer Addidas Shoe</b>
              </p>
              <div className="flex-col-wrap">
                <p>Ut quibusdam rem maxime porro</p>{" "}
                <p>mollitia facilis architecto esse.</p>
              </div>
              <div className="mt-8 text-gray-600 ml-4 mb-5">
                <p>Reviews(53)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around bg-gray-600 bg-blue-700 pb-10">
        <div>
          <div className="text-2xl text-green-700 mt-10">
            <b>Zay Shop</b>
          </div>
          <div>
            <hr className="w-80 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
          <div>
            <div>
              <i className="fa-solid fa-location-dot"></i>123 Consectetur at
              Ligula 10660
            </div>
            <div>
              <i className="fa-solid fa-phone"></i>010-020-0340
            </div>
            <div>
              <i className="fa-solid fa-envelope"></i>info@company.com
            </div>
          </div>
        </div>
        <div>
          <div className="text-2xl mt-10">Products</div>
          <div>
            <hr className="w-80 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
          <div>
            <p>Luxury</p>
            <p>Sport Wear</p>
            <p>Men's Shoes</p>
            <p>Women's Shoes</p>
            <p>Popular Dress</p>
            <p>Gym Accessories</p>
            <p>Sport Shoes</p>
          </div>
        </div>
        <div>
          <div className="text-2xl mt-10">Further Info</div>
          <div>
            <hr className="w-80 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
          <div>
            <p>Home</p>
            <p>About Us</p>
            <p>Shop Locations</p>
            <p>FAQS</p>
            <p>Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
}
