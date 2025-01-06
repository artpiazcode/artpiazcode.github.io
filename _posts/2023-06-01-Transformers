---
layout: post
title: Transformers
date: 2023-06-01
tags: transformer
categories: concepts
giscus_comments: false
related_posts: true
related_publications: true
toc:
  sidebar: left
---

# Transformers

<https://ai.googleblog.com/2017/08/transformer-novel-neural-network.html> 

Transformers ([Vaswani et al, 2017](https://arxiv.org/pdf/1706.03762.pdf)) combine attention and the encoder-decoder structure to improve upon some of the limitations of RNNs in language modelling tasks like translation. Introduces a new concept - self-attention.


## Self attention (layer)

A neural network layer that transforms a sequence of embeddings (for instance, [token](https://developers.google.com/machine-learning/glossary#token) embeddings) into another sequence of embeddings. Each embedding in the output sequence is constructed by integrating information from the elements of the input sequence through an [attention](https://developers.google.com/machine-learning/glossary#attention) mechanism.

The self part of self-attention refers to the sequence attending to itself rather than to some other context. Self-attention is one of the main building blocks for [Transformers](https://developers.google.com/machine-learning/glossary#Transformer) and uses dictionary lookup terminology, such as “query”, “key”, and “value”.

A self-attention layer starts with a sequence of input representations, one for each word. The input representation for a word can be a simple embedding. For each word in an input sequence, the network scores the relevance of the word to every element in the whole sequence of words. **The relevance scores determine how much the word's final representation incorporates the representations of other words.**

- Self attention allows a cell to compare the content of an input to all other inputs in the sequence. 

- **Includes the relationship between them into the embedding.**

* For words: self-attention allows representing which other words in a sentence it has strong relationships with.

For example, consider the following sentence:

The animal didn't cross the street because it was too tired.

The following illustration (from [Transformer: A Novel Neural Network Architecture for Language Understanding](https://ai.googleblog.com/2017/08/transformer-novel-neural-network.html)) shows a self-attention layer's attention pattern for the pronoun it, with the darkness of each line indicating how much each word contributes to the representation:

![The following sentence appears twice: 'The animal didn't cross the
&#x20;         street because it was too tired.'  Lines connect the word 'it' in
&#x20;         one sentence to five tokens ('The', 'animal', 'street', 'it', and
&#x20;         the period) in the other sentence.  The line between 'it' and
&#x20;         'animal' is strongest.](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcFOSGoyk7hi3ITjd5LiLGN86qc1H2xfyZTvEow219wdpXK6l9lSuk6w7meHCFWZwQf8Blxst4qjx-Ggdtb7qilb5C2Svkf--dSl5w6jF3LDd61gMUZc4gueN0Ckgno3PNzGkLqEX6lylEay-meh3_ZJ7_C?key=f7C-3cR0JMOdp_HXQpeORQ)

The self-attention layer highlights words that are relevant to "it". In this case, the attention layer has learned to highlight words that it might refer to, assigning the highest weight to animal.

For example, deciding on the most likely meaning and appropriate representation of the word “bank” in the sentence “I arrived at the bank after crossing the…” requires knowing if the sentence ends in “... road.” or “... river.”

To compute the next representation for a given word - “bank” for example - **the Transformer compares it to every other word in the sentence.** The **result of these comparisons is an attention score for every other word in the sentence.** These attention scores determine how much each of the other words should contribute to the next representation of “bank”. In the example, the disambiguating “river” could receive a high attention score when computing a new representation for “bank”. **The attention scores are then used as weights for a weighted average of all words’ representations which is fed into a fully-connected network to generate a new representation for “bank”, reflecting that the sentence is talking about a river bank.**

**For a sequence of n** [**tokens**](https://developers.google.com/machine-learning/glossary#token)**, self-attention transforms a sequence of embeddings n separate times, once at each position in the sequence.**

**Attention vs self-attention:**

- Attention allows output to focus attention on input while producing output.

- Self-attention allows inputs to interact with each other i.e. calculate attention of all other inputs wrt one input.


## **Multi-head self-attention**.

An extension of [self-attention](https://developers.google.com/machine-learning/glossary#self-attention) that applies the self-attention mechanism multiple times for each position in the input sequence.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXddbpGsumHN_8HzHQWzr7aGJ2-_pDrAwnWplF2UprTtkShaYU73l6THa6NnIJ5hDRaPPZGjU2-i3P0ivylunKUEqexbWnEm_c5JRrpl21jPEUMpQPNPt12Wqb3XkeMZLZtSLnPyT-Fxji4v-yJ90w0E54Kh?key=f7C-3cR0JMOdp_HXQpeORQ)

The structure of transformers looks like:

Transformers (e.g. GPT-4, LaMDA, Wu-Dao) are neural networks that learn context and meaning by closely tracking relationships in sequential data. LLMs are [transformer-based models](https://ai.googleblog.com/2017/08/transformer-novel-neural-network.html). 

**Transformer architecture**

\


![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd3LRh8UajU1xRAIICPPBouHT5B-UXdRLX6C-qqXAHXOM7-eVSu-kGl-QhPQGoqiojaP3wciYXgcOAiM-AxX96iWUgihP6PWQO_rBLempOuhRf-d07EoYhIoJFL1_VcLk-v88CJVcImoLz3DZOhw9CV-TlL?key=f7C-3cR0JMOdp_HXQpeORQ)

\


Different types of architectures are relevant for different types of tasks: 

- **Encoder-only**: Encoder only models use only the encoder of the transformer. It maps input text into an intermediate representation, aka embedding, which could serve as the input for downstream applications, like classifications. e.g. BERT. The one-model initiative in AnA is an example of an Encoder-only model.

* **Encoder-decoder**: These are essentially seq-to-seq models. It adds a decoder which maps intermediate representations into text output, which are used for generating text with a given input, such as summarization, or translation. Attention allows the decoder network to focus on relevant parts of the input when producing an output i.e. enhances some parts of the input data while diminishing the others. The idea is that there might be relevant information in every word in a sentence. So in order for the decoding to be precise, it needs to take into account all words of the input, using attention. Adds an extra input to each decoding step that comes from the encoding steps. e.g. MUM

- **Decoder-only:** Decoder models use only the decoder of a Transformer model. At each stage, for a given word the attention layers can only access the words positioned before it in the sentence. It is fed the original text, produces some output and this output is used as an input back into itself and these models are often called **auto-regressive** models. These models are well suited for tasks involving text generation. E.g. PaLM, ChatGPT

The structure of transformers looks like:

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXe7NncVvfQIOJzJ_1xBbmiqKGYCxrf22x-677KIEFwNEq1DmrtcdprUSNdI7_DqwWm2mBgsfWzykuMKWgyIXclEs8HdWUO5JL-CQtGI2cWU5i_weklv3gF9yyobVYUHJtRS6xWLCIsuh2cFRyqUHEv2Y_52?key=f7C-3cR0JMOdp_HXQpeORQ)

- Attention architecture is mostly unchanged today, but some details have changed (positional embeddings, learning rates, pre-norm attention)
