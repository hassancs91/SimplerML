---
sidebar_position: 5
title: Play with Weights 🎮
description: Play with weights to understand how they affect the prediction of virality of a twitter post.
---

# Let's Play 🎮

## Guess the weights! (Similuation)

I've got something for you to try out and learn more about guessing weights.

Fill the sample table with data, set your thresholds, and the number of iterations, click Start! and enjoy the Magic!

_Note: Don't set a very large number of iterations so your browser doesn't crash!_

<iframe src="http://localhost:3000/interactive/chap1/simulator/index.html" width="100%" height="1320" frameborder="0"></iframe>
<br/>

## For Python Coders

I understand that you may not be a coder, but if you're curious about how the weight-guessing process works under the hood, Think of it as a bonus peek "behind the scenes"

<h4>Python Script on Gussing Weights</h4>

Here's a python script that I created and you can play with. It demonstrates how to guess the weights to predict the virality of a twitter post.

```python
import random
import matplotlib.pyplot as plt

# Function to normalize data using max-min normalization
def normalize_data(data):
    norm_data = []
    for i in range(len(data[0])):
        col = [row[i] for row in data]
        min_val = min(col)
        max_val = max(col)
        norm_col = [(x - min_val) / (max_val - min_val) for x in col]
        norm_data.append(norm_col)
    return [list(x) for x in zip(*norm_data)]

# Twitter post data: Hour of Day, Content Length, Engagement Score
twitter_posts = [
    [10, 51, 41.80],
    [4, 764, 34.89],
    [14, 892, 47.12],
    [16, 575, 38.52],
    [22, 196, 5.94]
]

# Virality status (1 for viral, 0 for not viral)
ViralityStatus = [0, 1, 0, 1, 1]

# Normalize the Twitter post data
NormalizedPosts = normalize_data(twitter_posts)

# Function to initialize random weights for each feature
def initialize_weights(num_features):
    return [random.random() for _ in range(num_features)]

# Number of features in our data (3 in this case)
num_features = 3

# Randomly initializing the weights
RandomWeights = initialize_weights(num_features)

# Function to predict virality score
def predict_virality(post_features, weights):
    virality_score = 0
    for i in range(len(post_features)):
        virality_score += post_features[i] * weights[i]
    return virality_score

# Define a virality threshold
virality_threshold = 0.5

# Function to calculate the average error based on the threshold
def calculate_average_error(predictions, actuals):
    total_error = 0
    for i in range(len(predictions)):
        if predictions[i] >= virality_threshold:
            predicted_virality = 1
        else:
            predicted_virality = 0
        total_error += abs(predicted_virality - actuals[i])
    return total_error / len(actuals)

# Adjusting the threshold for average error
error_threshold = 0.2

# Storing the error for each iteration
errors = []

# Iterating to adjust weights
num_iterations = 1000
for i in range(num_iterations):
    PredictedVirality = []
    for features in NormalizedPosts:
        score = predict_virality(features, RandomWeights)
        PredictedVirality.append(score)

    AverageViralityError = calculate_average_error(PredictedVirality, ViralityStatus)
    errors.append(AverageViralityError)

    if AverageViralityError < error_threshold:
        print("Acceptable average error found!")
        break

    RandomWeights = initialize_weights(num_features)

# Plotting average error over iterations
plt.plot(errors)
plt.xlabel('Iteration')
plt.ylabel('Average Error')
plt.title('Average Error in Predicting Virality Over Iterations')
plt.show()

# Displaying final weights and lowest average error
print("Final Weights:", RandomWeights)
print("Lowest Average Error Achieved:", min(errors))
```

### Let's break it down:

- **Normalization:** We start by normalizing the data to ensure all features are on a similar scale.
- **Random Weights:** The script generates random initial weights for each feature (Hour of Day, Content Length, Engagement Score).
- **Predicting Virality**: It calculates a virality score for each post by multiplying features with weights and summing the results.
- **The Error Dance**: The script iterates, constantly adjusting the weights and recalculating the average error compared to our 'virality_threshold'. It stops when the error falls below an 'error_threshold'.
- **Visualization**: The included code even plots the average error over iterations, giving you a visual representation of the learning process.

### Experiment Time!

- **Change the Thresholds**: Play with the virality_threshold and error_threshold values. How does it affect the number of iterations and the final weights?
- **More Data, More Features**: Expand the twitter_posts dataset. Can you add more features (e.g., number of hashtags, mentions)? How does this impact the results?

Important Note: This simplified example demonstrates the idea of weight guessing that we explained in this chapter. Real-world machine learning algorithms use more sophisticated methods for optimization.
