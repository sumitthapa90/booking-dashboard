import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Features from "../../components/features/Features";
import PropertyList from "../../components/propertyList/PropertyList";
import FeatureItem from "../../components/featureItem/FeatureItem";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <h1>These popular destinations have a lot to offer</h1>
        <Features />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home Guest Love</h1>
        <FeatureItem />
        <MailList />
        <Footer />
      </div>
    </>
  );
}

export default Home;
