import Container from "@components/container";
import Image from "next/image";

export default function Cta(props) {
  return (
    <div className={`pt-12 bg-offgreen-light ${props.nomargin ? "" : "mt-28"}`}>
      <Container>
        <div className="grid gap-8 md:grid-cols-2 place-items-center">
          <div>
            <h2 className="text-3xl font-bold">Download the App</h2>
            <p className="max-w-md mt-4 leading-8 text-gray-600">
              Search for your favourite remote jobs on the go. Download our app
              on the iOS App Store or Android Play Store.
            </p>
            <div className="flex flex-col flex-wrap items-center gap-5 mt-5 sm:flex-row">
              <div>
                <a
                  href="#"
                  className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl">
                  <svg
                    width="35"
                    height="35"
                    viewBox="1 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M24.2355 0C24.3169 0 24.3984 0 24.4844 0C24.6842 2.46827 23.7421 4.31256 22.5971 5.64814C21.4736 6.97449 19.9352 8.26088 17.4469 8.06569C17.281 5.63277 18.2246 3.92526 19.3681 2.59276C20.4285 1.35094 22.3727 0.245905 24.2355 0Z"
                      fill="black"
                    />
                    <path
                      d="M31.7679 25.691C31.7679 25.7156 31.7679 25.7371 31.7679 25.7601C31.0686 27.878 30.0711 29.6931 28.8539 31.3775C27.7427 32.9067 26.381 34.9647 23.9496 34.9647C21.8487 34.9647 20.4532 33.6137 18.2999 33.5768C16.0223 33.54 14.7697 34.7065 12.6872 35C12.4489 35 12.2107 35 11.9771 35C10.4479 34.7787 9.21375 33.5676 8.31466 32.4764C5.66349 29.252 3.6148 25.087 3.23364 19.757C3.23364 19.2344 3.23364 18.7134 3.23364 18.1909C3.39502 14.3763 5.24853 11.2748 7.71219 9.77168C9.01242 8.97248 10.7998 8.29163 12.7901 8.59594C13.6431 8.72812 14.5145 9.02013 15.2784 9.30907C16.0023 9.58725 16.9075 10.0806 17.7651 10.0545C18.3461 10.0376 18.9239 9.73479 19.5095 9.52116C21.2247 8.90179 22.9061 8.19173 25.1223 8.52524C27.7857 8.92791 29.6761 10.1113 30.8442 11.9372C28.5911 13.3711 26.8098 15.532 27.1141 19.2221C27.3846 22.5741 29.3334 24.5352 31.7679 25.691Z"
                      fill="black"
                    />
                  </svg>
                  <div>
                    <p className="text-xs font-medium leading-none">
                      Download on the
                    </p>
                    <h4 className="mt-1 text-xl font-semibold leading-none">
                      App Store
                    </h4>
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.98448 0.511767C5.73255 -0.180194 4.26264 -0.164195 3.01871 0.521766L17.5979 13.971L22.4956 9.07328L6.98448 0.511767Z"
                      fill="black"
                    />
                    <path
                      d="M1.56079 1.89771C1.20481 2.47967 1.00082 3.14563 1.00082 3.85159V28.1422C1.00082 28.8262 1.18681 29.4781 1.52279 30.0481L16.184 15.3869L1.56079 1.89771Z"
                      fill="black"
                    />
                    <path
                      d="M28.9893 12.6572L24.3175 10.0793L19.0678 15.3271L25.5014 21.2607L28.9912 19.3348C30.2472 18.6389 30.9991 17.3909 30.9991 15.995C30.9971 14.5991 30.2472 13.3512 28.9893 12.6572Z"
                      fill="black"
                    />
                    <path
                      d="M17.6539 16.7429L2.9527 31.4441C3.59066 31.8081 4.29062 32.0001 4.99458 32.0001C5.67454 32.0001 6.35851 31.8281 6.98447 31.4821L23.6575 22.2806L17.6539 16.7429Z"
                      fill="black"
                    />
                  </svg>

                  <div>
                    <p className="text-xs font-medium leading-none">
                      Get it on
                    </p>
                    <h4 className="mt-1 text-xl font-semibold leading-none">
                      Google Play
                    </h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-end">
            <Image src="/img/device.png" alt="Phone" width={402} height={425} />
          </div>
        </div>
      </Container>
    </div>
  );
}
