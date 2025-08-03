import clsx from "clsx";

import appleLogo from "./assets/apple_logo.svg";
import magnifierIcon from "./assets/magnifier.svg";
import bagIcon from "./assets/bag.svg";
import airTag from "./assets/airtag.png";
import airtagLogo from "./assets/airtag-logo.png";
import photoAirtag1 from "./assets/photo1.png";
import photoAirtag2 from "./assets/photo2.png";
import iphones from "./assets/iphones.png";
import pulsar from "./assets/pulsar.png";
import handIphone from "./assets/hand-iphone.png";
import sonar2 from "./assets/sonar2.png";
import iphoneColor from "./assets/iphone-color.png";
import "./App.css";

const GlobalHeader = () => {
  return (
    <div className="bg-[#F5F5F7]">
      <div className="mx-auto max-w-[980px] h-[44px]">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center justify-between pr-[35px]">
            <a href="#">
              <img src={appleLogo} alt="Apple" />
            </a>
          </div>
          <div className="flex flex-1 items-center justify-between text-[12px]">
            <a href="#">Store</a>
            <a href="#">Mac</a>
            <a href="#">iPad</a>
            <a href="#">iPhone</a>
            <a href="#">Watch</a>
            <a href="#">AirPods</a>
            <a href="#">TV & Home</a>
            <a href="#">Entertainment</a>
            <a href="#">Accessories</a>
            <a href="#">Support</a>
          </div>
          <div className="flex items-center justify-between pl-[35px] gap-[35px]">
            <a href="#">
              <img src={magnifierIcon} alt="Search" />
            </a>
            <a href="#">
              <img src={bagIcon} alt="Shop" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Button = ({
  children,
  compact = false,
}: {
  children: React.ReactNode;
  compact?: boolean;
}) => {
  return (
    <a
      href="#"
      className={clsx(
        "flex items-center justify-between bg-[#0071E3] rounded-full",
        compact ? "px-[12px] h-[24px]" : "px-[16px] h-[36px]"
      )}
    >
      <span
        className={clsx("text-white", compact ? "text-[12px]" : "text-[17px]")}
      >
        {children}
      </span>
    </a>
  );
};

const LocalNav = () => {
  return (
    <div className="bg-[#F5F5F7]">
      <div className="mx-auto max-w-[980px] h-[52px] border-b border-[#D3D2D4]">
        <div className="flex items-center justify-between h-full">
          <span className="text-[21px] font-semibold">AirTag</span>
          <Button compact>Buy</Button>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center bg-[#F5F5F7] h-[1062px]">
      <div className="mx-auto max-w-[980px]">
        <div className="flex flex-col items-center justify-center gap-[10px]">
          <img src={airTag} width={244} />
          <div className="flex flex-col items-center justify-center gap-[8px] py-[47px]">
            <img src={airtagLogo} width={131} />
            <h1 className="text-[80px] text-center tracking-[-1.5px] leading-[84px] font-semibold">
              Lose your knack
              <br />
              for losing things.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

const CallToActionSection = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[980px]">
        <div className="flex flex-col items-center px-[125px] pt-[142px] pb-[150px] gap-[32px]">
          <div className="flex flex-col items-center justify-center gap-[28px]">
            <h2 className="text-[28px] text-center tracking-[-0.22px] leading-[32px] font-semibold">
              AirTag is a supereasy way to keep track of your stuff. Attach one
              to your keys, slip another in your backpack. And just like that,
              they’re on your radar in the Find My app, where you can also track
              down your Apple devices and keep up with friends and family.
            </h2>
            <span className="text-[24px] text-center font-semibold text-[#86868B]">
              Starting at $29
            </span>
          </div>
          <Button>Buy</Button>
        </div>
      </div>
      <div className="flex items-center justify-center pb-[152px] gap-[30px]">
        <img src={photoAirtag1} alt="Airtag" width={619} />
        <img src={photoAirtag2} alt="Airtag" width={619} />
      </div>
    </div>
  );
};

const SearchAirtagSection = () => {
  return (
    <div className="flex flex-col bg-[#F5F5F7] pt-[96px] gap-[72px]">
      <div className="mx-auto max-w-[980px]">
        <div className="flex flex-col items-center justify-center py-[47px] gap-[29px]">
          <div className="flex items-center border border-[#BF4800] px-[19px] h-[36px] rounded-full">
            <span>New</span>
          </div>
          <div className="flex flex-col items-center gap-[37px]">
            <h2 className="text-[64px] text-center tracking-[-0.22px] leading-[68px] font-semibold">
              Let the search party begin.
            </h2>
            <span className="text-[21px] text-center font-semibold text-[#86868B] tracking-[-0.53px] leading-[25px]">
              Share AirTag with up to five people. So items that everyone uses —
              like
              <br />
              an umbrella, a bike, or the family car keys — can be tracked by
              friends and family.
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pb-[152px] gap-[30px]">
        <img src={iphones} alt="iPhones" width={1075} />
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div className="bg-white pt-[141px]">
      <div className="mx-auto max-w-[980px]">
        <div className="flex flex-col items-center justify-center gap-[125px]">
          <div className="flex flex-row items-center justify-center gap-[80px]">
            <div className="flex flex-col w-[408px] gap-[36px]">
              <h2 className="text-[64px] tracking-[-0.22px] leading-[68px] font-semibold">
                Ping it. Find it.
              </h2>
              <span className="text-[21px] font-semibold text-[#86868B] tracking-[-0.53px] leading-[25px]">
                Misplacing something like your wallet doesn’t have to be a big
                deal when it has AirTag attached. You can play a sound on the
                built-in speaker by going to the new Items tab in the Find My
                app. Or just say “Hey Siri, find my wallet.” If it’s hiding
                nearby — like under the couch or in the next room — just follow
                the sound and your search is over.
              </span>
            </div>
            <div className="mr-[-82px]">
              <img src={pulsar} width={576} />
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[80px]">
            <div className="ml-[-82px]">
              <img src={handIphone} width={643} />
            </div>
            <div className="flex flex-col w-[408px] gap-[36px]">
              <h2 className="text-[64px] tracking-[-0.22px] leading-[68px] font-semibold">
                Cold. Warm.
                <br />
                Warmer. Hot.
              </h2>
              <span className="text-[21px] font-semibold text-[#86868B] tracking-[-0.53px] leading-[25px]">
                If your AirTag is nearby, your iPhone can lead you straight to
                it with Precision Finding.1 – which shows you the exact distance
                and direction to head in – thanks to built‑in Ultra Wideband
                technology.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FindDeviceSection = () => {
  return (
    <div className="flex flex-col bg-[#F5F5F7] pt-[93px] gap-[72px]">
      <div className="mx-auto max-w-[980px]">
        <div className="flex flex-col items-center justify-center py-[47px] gap-[29px]">
          <div className="flex flex-col items-center gap-[37px]">
            <h2 className="text-[64px] text-center tracking-[-0.22px] leading-[68px] font-semibold">
              Get by with a little help from hundreds of millions of friends.
            </h2>
            <span className="text-[21px] text-center font-semibold text-[#86868B] tracking-[-0.53px] leading-[25px]">
              When youʼve left something far behind, like at the beach or the
              gym, the Find My network — hundreds of millions of iPhone, iPad,
              and Mac devices around the world — helps track down your AirTag.
              And itʼs designed to protect your privacy every step of the way.
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-center gap-[80px]">
            <div className="flex flex-col w-[408px] gap-[36px] pb-[92px]">
              <h2 className="text-[48px] tracking-[-0.42px] leading-[52px] font-semibold">
                How does it work?
              </h2>
              <span className="text-[21px] font-semibold text-[#86868B] tracking-[-0.53px] leading-[25px]">
                Your AirTag sends out a secure Bluetooth signal that can be
                detected by nearby devices in the Find My network. These devices
                send the location of your AirTag to iCloud — then you can go to
                the Find My app and see it on a map. The whole process is
                anonymous and encrypted to protect your privacy. And itʼs
                efficient, so thereʼs no need to worry about battery life or
                data usage.
              </span>
            </div>
            <div className="mr-[-146px] pt-[62px]">
              <img src={sonar2} width={678} />
            </div>
          </div>

          <div className="flex flex-row items-center justify-center">
            <div className="pt-[53px] ml-[-13px]">
              <img src={iphoneColor} width={613} />
            </div>
            <div className="flex flex-col w-[408px] gap-[36px]">
              <h2 className="text-[48px] tracking-[-0.42px] leading-[52px] font-semibold">
                Lost Mode
                <br />
                makes finding
                <br />
                things even easier.
              </h2>
              <span className="text-[21px] font-semibold text-[#86868B] tracking-[-0.53px] leading-[25px]">
                Just like your other Apple devices, AirTag can be put into
                Lost Mode. Then, when it’s detected by a device in the network,
                you’ll automatically get a notification. You can also set it so
                someone can get your contact info by tapping your AirTag with
                their NFC-capable smartphone — that’s the same technology that
                lets people pay for things with their phones.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="bg-white h-screen w-screen">
      <GlobalHeader />
      <LocalNav />
      <HeroSection />
      <CallToActionSection />
      <SearchAirtagSection />
      <Features />
      <FindDeviceSection />
    </div>
  );
}

export default App;
