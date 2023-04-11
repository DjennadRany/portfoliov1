import './App.css';
import ReactDOM from "react-dom/client";
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

const logo = require('./Logo.jpg');


function App() {
  return (
    <><body>
      <div className="container">
      <p> Contactez moi par mail à l'adresse : <a href="mailto:rany.d22@gmail.com">rany.d22@gmail.com. </a></p>
    <div class="img-stom"><img class="log" src={logo} alt="logo"/></div>
    <br></br>
        <div className="App-intro">

        <h1 class="titel">
          Chef de projet technique / Webmaster / Développeur Front-end / Développeur A.E.M / Fullstack développeur JS / Growth Haker
        </h1>

        <br></br>
      <Accordion>
          <h2>Parcours professionel</h2>

          <Accordion.Item eventKey="0">
            <Accordion.Header><h2>BNP Banque Entreprise</h2></Accordion.Header>
            <Accordion.Body>
              <h3>Chef de projet technique - NOVEMBRE 2018 – JUILLET 2022</h3>
              <p>Migration CMS Autonomy vers AEM Adobe Expérience Manager, administration, développement frontend, dépendance
                Back et UI/UX contributions métier du site BNP Entreprise et des campagnes Banque Entreprise dans une équipe
                composée d’un Product Owner, SI, un chef de projet digital, un intégrateur et deux développeurs frontend et une
                collaboration avec la DSI BNP pour le Back Java et TMA.</p> <br></br>
              <h3>ENVIRONNEMENT TECHNIQUE :</h3>
              <p>Développement des Template UX/UI, mise en place des dépendances clientlibs, développement des
                composants AEM front et back, mise en place des environnements NodeJS (Angular12, React ) sous CMS
                AEM, parcours clients du site Banque Entreprise et Ma Banque Entreprise </p>
              <h3>Mission : </h3>
              Mise en place des sprints de 2 semaines :
              <ul>
                <li><p>Récupération du besoin du retail</p>
                </li>
                <li><p>Réalisation des maquettes métier et retour de validation</p></li>
                <li><p>Développement web avec les équipes IT</p>
                  <ol><p>Point de complexités du développement</p></ol>
                  <ol><p>Recherche et élaboration du besoin technique </p></ol>
                </li>
              </ul>
              <p>Mission au sein d’une équipe de développeurs des pages HTML, CSS et jQuery pour l'intégration au CMS Adobe
                Experience Manager.</p>
              <ul>
                <li><p>Récupération du besoin du retail</p>
                </li>
                <li><p>Ateliers de travail avec les métiers Parcours client, SEO, UX, Dev Back et Marketing.</p></li>
                <li><p>Mise en place du responsive HTML5, Miss en place du SASS. </p></li>
                <li><p>Recherche et développement de code Javascript, JQuery. </p></li>
                <li><p>Application de la charte graphique du site Brand Univer.</p></li>
              </ul>
              <h4>Environnement technique : </h4>
              <p>Illustrator, Photoshop, HTML, CSS3, Javascript, JQuery, Angular12</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header><h2>EDF</h2></Accordion.Header>
            <Accordion.Body>
              <h3>Intégrateur – Front Développeur - Octobre 2017 – Mars 2018</h3>
              <p>Mission au sein d’une équipe de développeurs des pages HTML, CSS et Javascript pour l'intégration au CMS Adobe
                Experience Manager.</p> <br></br>
              <ul>
                <li><p>Ateliers de travail avec les métiers parcours client, SEO, UX et Marketing</p></li>
                <li><p>Mise en place du responsive HTML5 avec SASS et gulp. </p></li>
                <li><p> Recherche et développement de code Javascript, Angular5. </p>
                  <ol><p>Application de la charte graphique du site EDF.</p></ol>
                </li>
              </ul>
              <h4>Environnement technique : </h4>
              <p>Illustrator, Photoshop, HTML, CSS3, Javascript, JQuery, Angular12</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header><h2>IBM France</h2></Accordion.Header>
            <Accordion.Body>
              <h3>Décembre 2016 – Janvier 2017 - Intégrateur Web – Designer UX/UI - AEM</h3>
              <p>Mission IBM pour le site du Crédit Agricole France. Création des page HTML5, CSS3, Less, Sass, JQuery, Javascript.</p> <br></br>
              <ul>
                <li><p>Travail avec une équipe basée à Lille </p></li>
                <li><p>Livraison des pages HTML, CSS, JQuery pour l'intégration au CMS : Adobe Experience Manager </p></li>
                <li><p> Réalisation des pages HTML. </p></li>
                <li><p> Mise en place et intégration de SASS avec Gulp (code kit). </p></li>
                <li><p> Mise en place du LESS et SASS</p></li>
                <li><p> Recherche et développement de code Javascript et jQuery  </p></li>
                <li><p> Application de la charte graphique du site Crédit Agricole avec les maquettes web de l'agence Le Village by CA Paris.  </p>
                </li>
              </ul>
              <h4>Environnement technique : </h4>
              <p> Illustrator, Photoshop, HTML, CSS3, Javascript, Filezilla</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header><h2>VENTE PRIVEE</h2></Accordion.Header>
            <Accordion.Body>
              <h3>Juin 2016 – Novembre 2016 - Intégrateur web</h3>
              <p>Webmaster appartenant au département « production des ventes (Intégrateur Prod) ».</p> <br></br>
              <ul>
                <li><p>Ateliers de travail avec le métier Marketing</p></li>
                <li><p> Créer les structures modèles des fiches techniques et les éléments liés à celles-ci au sein du service intégrateur Prod.</p></li>
                <li><p> Garantir une mise en forme des fiches techniques et des éléments qui l’accompagnent adaptés aux ventes et optimisés pour le site web de VentePrivée.com.</p></li>
              </ul>
              <h4>Environnement technique : </h4>
              <p> Illustrator, Photoshop, HTML, CSS3, Javascript, Filezilla</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header><h2>La Bross et Dupont Alternant Master</h2></Accordion.Header>
            <Accordion.Body>
              <h3>Septembre 2014 – juin 2016 - Webmaster/Graphiste</h3>
              <p>Gestion du parquet web du groupe, création et réalisation des évènements web des entreprises : </p> <br></br>
              <ul>
                <li><p>Entreprise du groupe : Eléphant, vileda, Mancret, Steripan, efiseeptyl, physélia intimate, Manix, Manix-Skyn, MissDen,
                  Dessange, Glamour, NailArt, Optim'Hom,Prima, Trott&Go</p></li>
                <li><p>  Site E-commerce Dessange, Eléphant, MissDen : CMS : Prestashop, Réalisation wording métier, réalisation
                  et développement des template du site, mise en place du CMS du site sur le serveur OVH, design UI/UX des
                  fiches produits et des pages du site ainsi que leurs développements HTML, CSS, JS, PHP. Exemple : Slider,
                  carrousel, Pop-in et autres.
                  Mise en place des admins du site et des formulaires de contact, Newsletter et envois des Mails clients.
                  Mise en place du système de paiement : CB et PayPal </p></li>
                <li><p> Site galerie Glamour : CMS : Joomla, Réalisation wording métier, réalisation et développement des template
                  du site, mise en place du CMS du site sur le serveur OVH, design UI/UX des pages articles et des pages du
                  site ainsi que leurs développements HTML, CSS, JS, PHP. Exemple : Slider, carrousel, Pop-in et autres.
                  Mise en place des admins du site et des formulaires de contact, Newsletter et envois des Mails clients.</p></li>
              </ul>
              <h4>Environnement technique : </h4>
              <p> Illustrator, Photoshop, HTML, CSS3, Javascript, Filezilla</p>
            </Accordion.Body>
          </Accordion.Item>


        </Accordion>
        </div>
      </div>
    </body><footer>
        
      </footer></>

    
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;

