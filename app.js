window.onload = function () {
    document.querySelector('#domainGen').innerHTML = domainRandom();

}

        function domainRandom() {
            let domain = [];
            let pronoun = ['the','our'];
            let adj = ['great', 'big','small','innovative' ];
            let noun = ['jogger', 'racoon', 'tech', 'architect'];
            let suffix = ['.com', '.net', '.org'];

            for (let i = 0; i < pronoun.length; i++)
            {
                for (let a = 0; a < adj.length; a++)
                {
                    for (let b = 0; b < noun.length; b++)
                    {
                        for (let c = 0; c < suffix.length; c++)
                        {
                            domain.push(pronoun[i] + adj[a] + noun[b] + suffix[c]);
                        }    
                    }
                }
            }
            function random2(a) {
                let random = Math.floor(Math.random() * domain.length);
                return a[random]

            }

            return (random2(domain));
        }
