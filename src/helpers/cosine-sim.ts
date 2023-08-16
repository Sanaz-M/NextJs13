//calculates the cosine similarity between two vectors, A and B. 
//Cosine similarity is a metric used to determine how similar the two vectors are. The formula is given by:

// cosine similarity = A⋅B / ∣∣A∣∣2 ×∣∣B∣∣2
//A⋅B is the dot product of the two vectors
// ∣∣A∣∣2 is the magnitude (or length) of vector A
// ∣∣B∣∣2 is the magnitude (or length) of vector B

export function cosineSimilarity(A: number[], B: number[]) {
  var dotproduct = 0
  var mA = 0
  var mB = 0
  for (let i = 0; i < A.length; i++) {
    dotproduct += A[i] * B[i]
    //Compute the magnitudes:
    mA += A[i] * A[i]
    mB += B[i] * B[i]
  }
  mA = Math.sqrt(mA)
  mB = Math.sqrt(mB)
  var similarity = dotproduct / (mA * mB) // Cosine similarity
  return similarity
}