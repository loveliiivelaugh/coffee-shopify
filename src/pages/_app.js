import React from "react";
import "./../styles/global.scss";
import NavbarCustom from "./../components/NavbarCustom";
import IndexPage from "./index";
import MenuPage from "./menu";
import ServicesPage from "./services";
import BlogPage from "./blog";
import AboutPage from "./about";
import ShopPage from "./shop";
import ContactPage from "./contact";
import SingleProductPage from "./single-product";
import CartPage from "./cart";
import CheckoutPage from "./checkout";
import { Switch, Route, Router } from "./../util/router.js";
import FirebaseActionPage from "./firebase-action.js";
import NotFoundPage from "./not-found.js";
import Footer from "./../components/Footer";
import "./../util/analytics.js";
import { ProvideAuth } from "./../util/auth.js";
//animationsss
import { AnimatePresence } from "framer-motion";

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <>
        
          <NavbarCustom
            bg="primary"
            textColor="light"
            variant="dark"
            expand="md"
            logo="https://uploads.divjoy.com/logo.svg"
          />

          <AnimatePresence>
          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route exact path="/menu" component={MenuPage} />

            <Route exact path="/services" component={ServicesPage} />

            <Route exact path="/blog" component={BlogPage} />

            <Route exact path="/about" component={AboutPage} />

            <Route exact path="/shop" component={ShopPage} />

            <Route exact path="/contact" component={ContactPage} />

            <Route path="/product/:id" component={SingleProductPage} />

            <Route exact path="/cart" component={CartPage} />

            <Route exact path="/checkout" component={CheckoutPage} />

            <Route
              exact
              path="/firebase-action"
              component={FirebaseActionPage}
            />

            <Route component={NotFoundPage} />
          </Switch>
          </AnimatePresence>
          
          <Footer
            bg="primary"
            textColor="light"
            size="md"
            bgImage=""
            bgImageOpacity={1}
            description="A short description of what you do here"
            copyright=""
            logo=""
          />
        </>
      </Router>
    </ProvideAuth>
  );
}

export default App;
