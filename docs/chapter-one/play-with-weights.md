---
sidebar_position: 4
title: Play with Weights
description: Play with weights to understand how they affect the prediction of virality of a twitter post.
---

# Hello Coders!

I understand that you may not be a coder, but if you're curious about how the weight-guessing process works under the hood, Think of it as a bonus peek "behind the scenes"

<h4>Python Script on Gussing Weights</h4>

here's a python script that I created that you can play with.  It demonstrates how to guess the weights so we can predict the virality of a twitter post.

## Let's break it down:

* **Normalization: **We start by normalizing the data to ensure all features are on a similar scale.
* **Random Weights:** The script generates random initial weights for each feature (Hour of Day, Content Length, Engagement Score).
* **Predicting Virality**: It calculates a virality score for each post by multiplying features with weights and summing the results.
* **The Error Dance**: The script iterates, constantly adjusting the weights and recalculating the average error compared to our 'virality_threshold'. It stops when the error falls below an 'error_threshold'.
* **Visualization**: The included code even plots the average error over iterations, giving you a visual representation of the learning process.

## Experiment Time!

* **Change the Thresholds**: Play with the virality_threshold and error_threshold values. How does it affect the number of iterations and the final weights?
* **More Data, More Features**: Expand the twitter_posts dataset. Can you add more features (e.g., number of hashtags, mentions)? How does this impact the results?

Important Note: This simplified example demonstrates the idea of weight guessing that we explained in this chapter. Real-world machine learning algorithms use more sophisticated methods for optimization.

## For Non Coders


Dont worry if you have not coded before, I have something for you too to play and test with to deepen your understanding of guessing weights:

**_[add the interactive tool here]_**
