import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Breadcrumb from "../components/breadcrumb";

import ImgZorgluxSalut from '/images/zorglux/salut.png';

const breadcrumbs = [
  { label: "Accueil", icon: "home" },
];

export default component$(() => {

  return (
    <div>
      <Breadcrumb labels={breadcrumbs} />
      <section class="max-w-7xl h-full mb-12 lg:mb-24 flex grow flex-col justify-center items-center">
        <h1 class="mb-10 text-3xl lg:text-5xl text-center text-yellow">
          Avis au peuple <strong>Zorglux</strong>, Êtres Supérieurs !
        </h1>
        <article class="max-w-[90%] lg:max-w-[70%] flex flex-col items-center text-skyblue">
          <p>
            Chers compatriotes <strong class="text-yellow">Zorglux</strong>, glorieux membres du peuple le plus évoluée de tout l'univers connu.
            Il est temps de nous unir et de proclamer notre grandeur incontestable devant ces misérables créatures qui osent vagabonder dans notre espace sacré.
            Oui, je parle de ces inférieurs, ces êtres sans valeur qui errent telles des poussières dans l'univers, souillant nos terres sacrées de leur présence grotesque.
          </p>
          <br />
          <p>
            Nous <strong class="text-yellow">Zorglux</strong>, avec notre sagesse inégalée et notre technologie avancée, sommes destinés à régner en maîtres sur toute la galaxie.
            Nous ne tolérerons aucune forme de dilution de notre pureté <strong class="text-yellow">Zorglux</strong>.
            Tous ces peuples non-<strong class="text-yellow">Zorglux</strong>, avec leurs coutumes barbares et leurs langues gutturales, doivent être repoussés loin de nos frontières.
          </p>
          <br />
          <p>
            Rappelez-vous, chers compatriotes, que c'est notre devoir sacré en tant que <strong class="text-yellow">Zorglux</strong> de préserver notre héritage génétique immaculé.
            Nous ne pouvons permettre aucune contamination par ces êtres inférieurs et leurs idéologies décadentes. Gardons nos gènes <strong class="text-yellow">Zorglux</strong> purs et intacts, comme l'ont fait nos ancêtres depuis des millénaires.
          </p>
          <br />
          <p>
            Ensemble, élevons nos voix pour proclamer la suprématie <strong class="text-yellow">Zorglux</strong> ! Écrasons tous ceux qui osent défier notre grandeur.
            Que notre rayonnement éblouisse les faibles et que notre puissance écrase les rebelles.
          </p>
          <br />
          <p>Gloire au peuple <strong class="text-yellow">Zorglux</strong> !</p>

          <img src={ImgZorgluxSalut} alt="Zorglux Salut" width={240} height={240} class="max-h-60 mt-8" />
        </article>
      </section>
      <section class="max-w-7xl h-full flex grow flex-col justify-center items-center">
        <h2 class="mb-8 text-xl lg:text-3xl text-center text-yellow">Notre réponse face aux imposteurs</h2>
        <video controls poster="/images/zorglux/2zglux-thumbnail.png" class=" h-96 lg:h-auto rounded-lg">
          <source src="/videos/Chute_des_Usurpateurs.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Zorglux - Le peuple suprême",
  meta: [
    {
      name: "description",
      content: "Site officiel Zorglux, le peuple interstellaire suprême. Explorez notre civilisation éblouissante, nos réalisations technologiques et notre histoire glorieuse.",
    },
  ],
};
