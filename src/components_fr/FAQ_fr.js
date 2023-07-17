import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [question4, setQuestion4] = useState(false);

  return (
    <div style={{ backgroundColor: '#18171A' }}>
      <br />
      <div className="FAQ">
        <h2>Questions fréquemment posées (FAQ)</h2>
        <br />
        <div>
          <h3 className={question1 ? 'open' : ''} onClick={() => setQuestion1(!question1)}>
            Les séances de coaching personnel peuvent-elles être adaptées à mes objectifs de remise en forme spécifiques et à mes besoins ?
            <span>+</span>
          </h3>
          {question1 && (
            <p>
              Oui, les séances de coaching personnel peuvent être entièrement adaptées à vos objectifs de remise en forme spécifiques et à vos besoins. Lorsque vous travaillez avec un coach personnel, il évaluera votre niveau de forme actuel, discutera de vos objectifs et adaptera les séances d'entraînement en conséquence. Le coach concevra un programme d'entraînement personnalisé qui répond à vos besoins individuels. Il tiendra également compte de toute préoccupation de santé que vous pourriez avoir afin d'assurer des séances d'entraînement en toute sécurité.
            </p>
          )}
          <hr />
        </div>  
        <div>
          <h3 className={question2 ? 'open' : ''} onClick={() => setQuestion2(!question2)}>
            Comment puis-je créer un plan alimentaire équilibré qui soutient mes objectifs de remise en forme ?
            <span>+</span>
          </h3>
          {question2 && (
            <p>
              Pour créer un plan alimentaire équilibré qui soutient vos objectifs de remise en forme, commencez par déterminer vos besoins caloriques et vos besoins en macronutriments. Concentrez-vous sur l'incorporation de protéines maigres, de grains entiers, de fruits, de légumes et de graisses saines dans vos repas. De plus, notre salle de sport peut vous fournir des conseils professionnels de nutritionnistes qui peuvent vous aider à créer un plan alimentaire personnalisé qui correspond à vos objectifs de remise en forme. Nous proposons des conseils précieux sur le moment des repas, les choix alimentaires et les compléments alimentaires pour optimiser vos résultats.
            </p>
          )}
          <hr />
        </div>    
        <div>
          <h3 className={question3 ? 'open' : ''} onClick={() => setQuestion3(!question3)}>
            À quelle fréquence devrais-je planifier des séances de coaching personnel ?
            <span>+</span>
          </h3>
          {question3 && (
            <p>
              La fréquence de planification des séances de coaching personnel dépend de vos objectifs de remise en forme individuels, de votre disponibilité et de votre budget. Il est recommandé d'avoir au moins 2 à 3 séances par semaine pour voir des progrès significatifs. Cependant, si vous avez des objectifs spécifiques ou si vous avez besoin d'un entraînement plus intensif, envisagez d'augmenter la fréquence à 4 séances par semaine. Notre salle de sport propose des options flexibles et des plans d'entraînement adaptés à vos besoins, afin que vous puissiez bénéficier du bon niveau de soutien et de conseils pour atteindre vos objectifs de remise en forme.
            </p>
          )}
          <hr />
        </div>  
        <div>
          <h3 className={question4 ? 'open' : ''} onClick={() => setQuestion4(!question4)}>
            Puis-je essayer la salle de sport avant de m'engager dans une adhésion ?
            <span>+</span>
          </h3>
          {question4 && <p>Absolument ! Nous offrons une période d'essai aux membres potentiels afin qu'ils puissent découvrir notre salle de sport avant de s'engager.</p>}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
