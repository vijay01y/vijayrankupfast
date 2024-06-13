const express = require("express");
const fs = require("fs");
const path = require("path");
const { header, footer } = require("./components/layout");
const app = express();
app.use("/libs", express.static(path.join(__dirname, "node_modules")));
app.use(express.static(path.join(__dirname, "public")));

const readHTML = (filename) =>
  fs.readFileSync(path.join(__dirname, "views", filename), "utf8");

const applyLayout = (seoData, body) => header(seoData) + body + footer();

app.get("/", (req, res) => {
  const body = readHTML("home.html");
  const seoData = {
    title: "Home Page",
    description:
      "Welcome to our Home Page. Here you find links to all services.",
    keywords: "home, services, welcome",
  };
  res.send(applyLayout(seoData, body));
});

app.get("/seo360", (req, res) => {
  const body = readHTML("seo360.html");
  const seoData = {
    title: "seo360 Page",
    description:
      "Welcome to our seo360 Page. Here you find links to all services.",
    keywords: "seo360, services, welcome",
  };
  res.send(applyLayout(seoData, body));
});
app.get("/seo-dictionary", (req, res) => {
    const body = readHTML("seo-dictionary.html");
    const seoData = {
      title: "seo-dictionary Page",
      description:
        "Welcome to our seo-dictionary Page. Here you find links to all services.",
      keywords: "seo-dictionary, services, welcome",
    };
    res.send(applyLayout(seoData, body));
  });
  app.get("/blog", (req, res) => {
    const body = readHTML("blog.html");
    const seoData = {
      title: "blog Page",
      description:
        "Welcome to our blog Page. Here you find links to all services.",
      keywords: "blog, services, welcome",
    };
    res.send(applyLayout(seoData, body));
  });
 

  app.get("/blog_details", (req, res) => {
    const body = readHTML("blog_details.html");
    const seoData = {
      title: "blog_details Page",
      description:
        "Welcome to our blog_details Page. Here you find links to all services.",
      keywords: "blog_details, services, welcome",
    };
    res.send(applyLayout(seoData, body));
  });

  app.get("/service", (req, res) => {
    const body = readHTML("service.html");
    const seoData = {
      title: "service Page",
      description:
        "Welcome to our service Page. Here you find links to all services.",
      keywords: "service, services, welcome",
    };
    res.send(applyLayout(seoData, body));
  });

  app.get("/service_details", (req, res) => {
    const body = readHTML("service_details.html");
    const seoData = {
      title: "service Page",
      description:
        "Welcome to our service_details Page. Here you find links to all services.",
      keywords: "service_details, services, welcome",
    };
    res.send(applyLayout(seoData, body));
  });

app.get("/about", (req, res) => {
  const body = readHTML("about.html");
  const seoData = {
    title: "About Us",
    description: "Learn more about us, our mission, vision, and team.",
    keywords: "about, mission, team",
  };
  res.send(applyLayout(seoData, body));
});

app.get("/contact", (req, res) => {
  const body = readHTML("contact.html");
  const seoData = {
    title: "Contact Us",
    description: "Contact us through email or phone. We are here to help.",
    keywords: "contact, email, phone",
  };
  res.send(applyLayout(seoData, body));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
