One of the key component for transformers are <b>positional embeddings</b>.
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/positional_encoding.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Transformer by design does not take into account the order of the tokens. Attention mechanism treats a sequence as a bag of tokens. The processing of the embedding vectors in the transformer attention block to transform into query, key and value vector occurs in parallel. Therefore, the information about the order is not captured. For this reason, positional embeddings are important to take account for the order of tokens; ex. consider : 
__The man attacked the tiger__ vs __The tiger attacked the man__. 

Position embeddings are a unique embedding generated for each position in the sequence. These are dense vectors representing the position of each token in the sequence. The token embedding (dense vector representation of each token in input sequence capturing the semantic meaning of the token) and the positional embeddings (offset vector) are combined to result in a new vector that contains both semantic and position information. 

The positional embeddings value cannot be too large. If the positional embeddings (which are offset vectors) are too lartge, then the combined vector will get offset by a very large distance destroying the overall concept of the embedding space where word vector closely related are close to one another. Therefore, the mathematical function to model the positional embeddings should be bounded like sine / cosine (value between -1 and +1). 

__Attention is all you need__ paper defined positional embedding as a combination of sine and cosine functions of the position in input sequence and dimension of the output embedding space.

RoPE was first introduced in 2022 RoFormer paper https://arxiv.org/pdf/2104.09864. 

The goal for position encoding is to enable supervision for dependency modeling between elements at different positions of the sequence.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/RoPE.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


RoPE encodes the absolute position with a rotation matrix and meanwhile incorporates the explicit relative position dependency in self attention formulation. 
- Flexibility of sequence length
- Decaying inter-token dependency with increasing relative distances
- Capability if equipping the linear self-attention with relative position encoding. 

