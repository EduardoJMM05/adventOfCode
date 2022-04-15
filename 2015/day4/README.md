# Day 4: The Ideal Stocking Stuffer

Santa needs help [mining](https://en.wikipedia.org/wiki/Bitcoin#Mining) some AdventCoins (very similar to [bitcoins](https://en.wikipedia.org/wiki/Bitcoin)) to use as gifts for all the economically forward-thinking little girls and boys.

To do this, he needs to find [MD5](https://en.wikipedia.org/wiki/MD5) hashes which, in [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal), start with at least *five zeroes*. The input to the MD5 hash is some secret key (your puzzle input, given below) followed by a number in decimal. To mine AdventCoins, you must find Santa the lowest positive number (no leading zeroes: `1`, `2`, `3`, ...) that produces such a hash.

For example:

* If your secret key is `abcdef`, the answer is `609043`, because the MD5 hash of `abcdef609043` starts with five zeroes (`000001dbbfa...`), and it is the lowest such number to do so.
* If your secret key is `pqrstuv`, the lowest number it combines with to make an MD5 hash starting with five zeroes is `1048970`; that is, the MD5 hash of `pqrstuv1048970` looks like `000006136ef...`.

## Part Two

The next year, to speed up the process, Santa creates a robot version of himself, _Robo-Santa_, to deliver presents with
him.

Santa and Robo-Santa start at the same location (delivering two presents to the same starting house), then take turns
moving based on instructions from the elf, who is eggnoggedly reading from the same script as the previous year.

This year, how many houses receive _at least one present_?

For example:

- `^v` delivers presents to `3` houses, because Santa goes north, and then Robo-Santa goes south.
- `^>v<` now delivers presents to `3` houses, and Santa and Robo-Santa end up back where they started.
- `^v^v^v^v^v` now delivers presents to `11` houses, with Santa going one direction and Robo-Santa going the other.

## Answers

The table bellow shows my answers for the input file that [Advent Of Code](https://adventofcode.com/) gave me.

| Part | Answer |
| :--- | :----- |
| 1    | 2592   |
| 2    | 2390   |
