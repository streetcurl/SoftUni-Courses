function chessBoard(num) {

    console.log(`<div class="chessboard">`);

    for (let i = 0; i < num; i++) {

        console.log(`   <div>`);

        if (i == 0 || i == 2 || i % 2 === 0) {

            for (let j = 0; j < num; j++) {

                if (j == 0 || j == 2 || j % 2 === 0) {
                    console.log(`       <span class="black"></span>`);
                } else {
                    console.log(`       <span class="white"></span>`);
                }

            }

        } else {

            for (let j = 0; j < num; j++) {

                if (j == 0 || j == 2 || j % 2 === 0) {
                    console.log(`       <span class="white"></span>`);
                } else {
                    console.log(`       <span class="black"></span>`);
                }

            }

        }

        console.log(`   </div>`);

    }



    console.log(`</div>`);


}

chessBoard(4);