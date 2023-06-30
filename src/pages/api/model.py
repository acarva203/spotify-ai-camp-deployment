import joblib
import pandas as pd
from sklearn.preprocessing import LabelEncoder, StandardScaler
import os

class GenrePredictor:
    def __init__(self):
        # Get the absolute path of the directory where app.py is located
        dir_path = os.path.dirname(os.path.realpath(__file__))

        # Use the absolute path to load the model
        model_path = os.path.join(dir_path, 'trained_model_xgboost_v2.joblib')
        self.model = joblib.load(model_path)

        # Use the absolute path to load the label encoder
        encoder_path = os.path.join(dir_path, 'label_encoder_v2.joblib')
        self.label_encoder = joblib.load(encoder_path)

    def predict_genre(self, input_data):
        print(input_data.head())
        # Select the non-numerical columns
        non_numerical_cols = input_data.select_dtypes(include=['object']).columns
        
        print(non_numerical_cols)

        # Perform one-hot encoding on the non-numerical columns
        input_data_encoded = pd.get_dummies(input_data, columns=non_numerical_cols)
        
        print(input_data_encoded)

        # Standardize the features
        scaler = StandardScaler()
        input_data_scaled = scaler.fit_transform(input_data_encoded)

        # Make predictions on the input data
        y_pred_encoded = self.model.predict(input_data_scaled)
        
        print(y_pred_encoded)

        # Inverse transform the encoded predictions
        y_pred = self.label_encoder.inverse_transform(y_pred_encoded)

        return y_pred
      
# # Initialize the GenrePredictor
# predictor = GenrePredictor()

# # Assume that you have some known labels
# known_labels = ['3', '6']

# # Transform the known labels
# encoded_labels = predictor.label_encoder.transform(known_labels)

# # Print the encoded labels
# print(f"Encoded labels: {encoded_labels}")

# # Now, inverse transform the encoded labels
# decoded_labels = predictor.label_encoder.inverse_transform(encoded_labels)

# # Print the decoded labels
# print(f"Decoded labels: {decoded_labels}")
