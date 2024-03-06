function primeNumberChecker(number) {

    let isPrime = true;

    if (number < 2) {
        isPrime = false;
    }

    if (number === 2 || number === 3) {
        isPrime = true;
    }

    if (number > 3) {

        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }


    console.log(isPrime);

}

primeNumberChecker(2)
primeNumberChecker(3)
primeNumberChecker(4)
primeNumberChecker(5)
primeNumberChecker(7)
primeNumberChecker(11)
primeNumberChecker(13)
primeNumberChecker(17)
primeNumberChecker(19)
primeNumberChecker(23)
primeNumberChecker(29)
primeNumberChecker(31)
primeNumberChecker(37)
primeNumberChecker(41)
primeNumberChecker(43)
primeNumberChecker(47)
primeNumberChecker(53)
primeNumberChecker(59)
primeNumberChecker(61)
primeNumberChecker(67)
primeNumberChecker(71)
primeNumberChecker(73)
primeNumberChecker(79)
primeNumberChecker(83)
primeNumberChecker(89)
primeNumberChecker(97)
primeNumberChecker(101)
primeNumberChecker(103)
primeNumberChecker(107)
primeNumberChecker(109)
primeNumberChecker(113)
primeNumberChecker(127)
primeNumberChecker(131)
primeNumberChecker(137)
primeNumberChecker(139)
primeNumberChecker(149)
primeNumberChecker(151)
primeNumberChecker(157)
primeNumberChecker(163)
primeNumberChecker(167)
primeNumberChecker(173)
primeNumberChecker(179)
primeNumberChecker(181)
primeNumberChecker(191)
primeNumberChecker(193)
primeNumberChecker(197)
primeNumberChecker(199)
primeNumberChecker(211)
primeNumberChecker(223)
primeNumberChecker(227)
primeNumberChecker(229)
primeNumberChecker(233)
primeNumberChecker(239)
primeNumberChecker(241)
primeNumberChecker(251)
primeNumberChecker(257)
primeNumberChecker(263)
primeNumberChecker(269)
primeNumberChecker(271)