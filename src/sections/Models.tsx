import React from 'react';
import Image from 'next/image';
import KNN from '@public/knn.png';
import SVC from '@public/svc.png';
import XGB from '@public/xgb.png';

function Models() {

  return (
    <section className="page-section" id="mlmodels">
      <div className="container model">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Machine Learning Models</h2>
          <h3 className="section-subheading text-muted">Here are the models that we used to interpret our data.</h3>
        </div>
        <h4 className="my-3">Classification</h4>
        <p>
          We used classification models to determine what genre would be given in response to a majority of the factors such as danceability, tempo, and energy present in our dataset.
        </p>
        <h3 className="my-3">KNN (K Nearest Neighbors) Model</h3>
        <p className="lead">
          Imagine you have a group of friends who like different types of fruits. Some like apples, some like oranges, and some like bananas. You want to know what fruit a new friend might like based on their preferences. The KNN algorithm works in a similar way. It looks at the preferences of your existing friends (the labeled data) to predict the preference of a new friend (the new input).
        </p>
        <img src={KNN.src} alt="KNN Model" height={300} />
        <h4 className="my-3">Comprehensive KNN Model Analysis</h4>
        <p className="lead">
          This model had 9% accuracy. As you can see from the confusion matrix, this comprehensive model was terrible and the worst model in predicting song genres. In trying to predict all of the 114 genres correctly, the model predicted less than 1 in 10 correctly.
        </p>
        <Image src={KNN} height={500} width={500} alt="KNN Model Analysis" />
        <h4 className="my-3">Condensed KNN Model Analysis</h4>
        <p className="lead">
          In the condensed model, we grouped the 114 genres into 17 overarching supergenres. This model had approximately 30% accuracy. As you can see from the confusion matrix, the condensed model was better at predicting song genres, yet more often than not predicted the wrong genres.
        </p>
        <img src={SVC.src} alt="Condensed KNN Model Analysis" height={500} />
        <h3 className="my-3">XG Boost Classifier Model (Extreme Gradient Boosting)</h3>
        <p className="lead">
          XGBoost is like having a team of experts (weak learners) who specialize in different aspects of house affordability. Each expert provides their opinion, and the final decision is made by considering the opinions of all the experts. The team continuously learns from their mistakes and adjusts their opinions to make better predictions. By combining the knowledge of multiple weak models and using an optimization technique called gradient boosting, XGBoost creates a robust and accurate model for classification tasks. It provides insights into the important features driving the predictions, helping you understand the factors that influence the affordability of houses.
        </p>
        <Image src={XGB} height={300} width={300} alt="XG Boost Classifier Model" />
        <h4 className="my-3">Comprehensive XG Boost Classifier Model Analysis</h4>
        <p className="lead">
          This model performed the best overall with an accuracy of approximately 40%. As you can see from the confusion matrix, it was better at predicting song genres, but still not by much.
        </p>
        <Image src={SVC} height={300} width={300} alt="XG Boost Classifier Model Analysis" />
      </div>
    </section>
    
  );
}

export default Models;
