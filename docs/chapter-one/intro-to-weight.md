---
sidebar_position: 3
title: Introducing Weights 🤹‍♀️
description: This section introduces the concept of weights and how they are used in machine learning.
---

# Introducing Weights 🤹‍♀️

## What are weights?

If you think about it a little, each of the conditions we suggested may have contributed differently to making a post viral.

For example, the content length may have a 60% effect, while the Day of the week may have only 20%.

This is why we should think about **giving <span style={{color:"red"}}>weights</span> for each condition**!

We will Assign a numerical value to each condition based on its importance. _(again, it is an assumption)_

- Time of Post: Weight = 0.3 (30%)
- Length of Content: Weight = 0.5 (50%)
- Day of the Week: Weight = 0.2 (20%)

Now, instead of just checking conditions, we calculate a score based on these weights.

**Example**:

A 200-character post posted in the evening on a weekday might get a score of 0.5 (Type of Content) + 0.3 (Time of Post) + 0.1 (Day of the Week) = 0.9.

Then, we compare this number to a **threshold** (a number that we assume makes a post viral, let’s say 0.8) - _we will talk about this later._

In our case, **0.9 > 0.8**, so the post is predicted to be viral.

This way, each condition contributes to the final decision, but with varying importance, reflected by their weights.

## In Real Life, Weights are Hidden!

Going back to our example, we don’t know the weight for each condition. And this may even vary between platforms. Each platform sets its own weights based on its mission, algorithm, and how it works.

For instance, the publish time may be way more critical on Twitter than on YouTube.

Our primary goal is to find the proper weights so that when you give it an input, it can predict the output.

Here is a simple **_simulation_** on how weights affects our predictions:

<iframe src="/interactive/chap1/basic_predictor/index.html" width="100%" height="400" frameborder="0"></iframe>
<br/>

Imagine you know the exact weights for each condition that makes a post viral. Then, you will not only predict virality but also have one billion followers in one **week!**

![Going Viral on Twitter](./img/img-2.png "Going Viral on Twitter")

Ohh, I almost forgot that this book is about Machine learning😅 Let’s start then!

**Machine learning is about finding and learning these weights**, not only for social media posts. But for any use case where machine learning can help (_more on that later_)

## How do we find the proper weights for each condition?

Let us stick to our example to keep things simple as before (_I hope so_)

What we will do now is look at posts already published, collect a list of both viral and non-viral posts, and record some data about the conditions we want to study and discover weights for. In our case, let’s collect the following data:

- Time of Post (hour of the day)
- Length of Content
- Engagement Level

So we have like a table containing records for each multiple posts, something like this:

<table>
  <tr>
   <td><strong>Hour of Day (0-23)</strong></td>

   <td><strong>Content Length (chars)</strong></td>

   <td><strong>Engagement Score (of 100)</strong></td>

   <td><strong>Virality (0-1)</strong></td>

  </tr>
  <tr>
   <td><strong>10</strong></td>

   <td><strong>51</strong></td>

   <td><strong>41.80</strong></td>

   <td><strong>0</strong></td>

  </tr>
  <tr>
   <td><strong>4</strong></td>

   <td><strong>764</strong></td>

   <td><strong>34.89</strong></td>

   <td><strong>1</strong></td>

  </tr>
  <tr>
   <td><strong>14</strong></td>

   <td><strong>892</strong></td>

   <td><strong>47.12</strong></td>

   <td><strong>0</strong></td>

  </tr>
</table>

Perfect!

Now, with machine learning we will figure out the patterns and relations between the inputs and outputs. **these are the weights!** Another term for weights may be _relations_.

**So, when we figure out the weights (_relations_) we can predict the output for new inputs.**

In our case new inputs are new posts.

![weights example](./img/img-3.png "weights example")

Now that we've seen how assigning different weights to our conditions affects the outcome, we are beginning to touch on the essence of machine learning.

Let's explore how this learning process works, stepping further into the world of machine learning, and how we can find the weights. **Here is were the magic begins!**

## Finding weights with a random guess!

Since we are starting from scratch, we know nothing about the weights!

Our first basic dummy approach will be **trying to guess them!**

Let’s go back to your social media posts example.

We initially don’t know how important each factor (condition) is in determining a post’s virality. So, we assign random weights to each condition.

For simplicity, let’s say we assign weights on a scale from 0 to 1.

**Here we are:**

- Time of Post: Weight = 0.3
- Length of Content: Weight = 0.5
- Engagement Level: Weight = 0.2

**Example**

Suppose we have a post with the following characteristics:

- Posted at 15:00 (3 PM, represented as 15)
- Content Length: 150 characters
- Engagement Level: 50 (average likes and comments)

We calculate the virality score as follows:

- **Time Score** = 15 \* 0.3 = 4.5
- **Length Score** = 150 \* 0.5 = 75
- **Engagement Score** = 50 \* 0.2 = 10

**Total virality Score = 4.5 + 75 + 10 = 89.5**

**💡Setting a Threshold to test with.**

Let’s set a threshold, **say 85**, to decide if a post is likely to be viral.

In our example, the score of 89.5 is above 85, so we predict this post will be viral.

![predict virality with a threshold](./img/img-4.png "predict virality with a threshold")

**Let’s review the weight Discovery process:**

Initially, we assigned random weights to our conditions.

Each set of weights gives us some predictions about post-virality.

We then check how accurate these predictions are, like trying the guessed combination on a post that doesn't belong to our dataset, but we know if it is viral or not, so this way, we can test our weights!

When we find a set of weights that gives us good predictions **(meaning our predictions match the actual outcomes well)**. we’ve found a combination of weights that seems to work!

It is like Guessing the Numbers for a lock!

Imagine you’re trying to unlock a combination lock, but you don’t know the correct numbers. You try different combinations randomly. Suddenly, one combination clicks and the lock opens.

In machine learning, discovering a set of weights that accurately predicts outcomes (like whether a social media post will be viral) is similar to finding the right combination for a lock.

The moment we find a good combination of weights is very important, here is why:

- **Validation of Our Approach**: Discovering effective weights validates that our approach and understanding of the problem are on the right track.
- **Baseline for Improvement**: This set of weights becomes a baseline. We know these weights work to some extent, so now we can try to improve them further. **we are not blind anymore!** we can optimize based on something from now on.
