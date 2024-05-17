import "@/styles/globals.css";
import Menu from "@/components/menu.jsx";
import Logo from "@/components/logo.jsx";
import BackgroundOverlay from "@/components/backgroundOverlay.jsx";
import GetBreadcrumbs from "@/components/breadCrumbs.jsx";
import BackToTopButton from "@/components/backTotop.jsx";

export default function App({ Component, pageProps }) {
  return (
      <div className='layoutStyle'>
          <header>
              <BackgroundOverlay/>
          </header>
          <main><BackToTopButton/></main>
          <Menu/>
          <Logo/>
          <GetBreadcrumbs/>
          <Component {...pageProps} />

      </div>
  );
}
