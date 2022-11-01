const timeline = gsap.timeline({ defaults: { duration: .7, stagger: .5, opacity: 0 } })

timeline
    .from('.teclas', { duration: 1.3, y: '5%' })
    .from('.forca', { y: '10%' })
    .from('#categoria', { y: '50%' })
    .from('#palavra_secreta', { y: '30%' })