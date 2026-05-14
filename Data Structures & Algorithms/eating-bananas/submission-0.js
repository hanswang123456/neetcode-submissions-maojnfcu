class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let max = 0;
        let min = 1;

        for(let i = 0; i < piles.length; i++) {
            max = Math.max(max, piles[i]);
        }
        console.log(max);

        while(min < max) {
            let mid = Math.floor((max + min)/2);
            let time = 0;
            for(let banana of piles) {
                console.log(banana/min)
                time+= Math.ceil(banana/mid);
            }

            if(time > h) { // took too long
                min = mid + 1;
            } else { // faster than expected
                max = mid;
            }
        }

        return max;
    }
}
