export default {
    props:['review'],
    template:
        `
     <section >
        <p>user name: {{review.name}}</p>
        <p>rate: {{review.rate}}</p>
        <p>review: {{review.review}}</p>
        <small>added at: {{review.time}}</small>
     </section>
     `
}