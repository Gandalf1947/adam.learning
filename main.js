console.log("main.js started")
let artykul1 = `
    <h2>NA POCZĄTEK</h2>

    <p>
        Na początek najlepiej obejrzeć filmy z kanału <a href="https://www.youtube.com/@Pasjainformatyki">Pasja informatyki</a>.<br>
        Dużo na tym kanale wyjaśniają na temat.<br>
        Strona ta została tylko stworzona w celach pracy na lekcji i raczej nie będzie kontunowana.
    </p>
`;

let artykul2 = `
    <h2>PĘTLE W JS</h2>

    <p>Na tej lekcji nauczysz się korzystać z podstawowych pętli w języku JAVASCIRPT</p><br>
    <h3>Pętla for</h3>
    <p>
        Pierwszą pętlą jest for. Jest to najczęściej używana pętla.<br>
        Umożliwia precyzyjną kontrolę nad liczbą iteracji dzięki trzem wyrażeniom:<br>
        <b>inicjalizacji</b>, <b>warunkowi kontynuacji</b> i <b>wyrażeniu kroku</b>
    </p>
    <p>Przykład:</p>
    <div class="kod">
    <pre>
        <code>
        <span class="p">for</span><span class="y">(</span><span class="b">let</span> <span class="lb">i</span> = <span class="lg">0</span>; <span class="lb">i</span> < <span class="lg">10</span>; <span class="lb">i</span>++<span class="y">){
            <span class="g">/* kod */</span>
        }</span>
        </code>
    </pre>
    </div>
    <br>

    <h3>Pętla while</h3>
    <p>
        Drugą pętlą jest while. Wykonuje ona zawarty w niej kod <b>dopóki</b> określony warunek jest prawdziwy.<br>
        Warunek jest sprawdzany <b>przed każdym</b> wykonaniem kodu.
    </p>
    <p>Przykład:</p>
    <div class="kod">
    <pre>
        <code>
        <span class="b">let</span> <span class="lb">i</span> = <span class="lg">0</span>;
        <span class="p">while</span><span class="y">(</span><span class="lb">i</span> < <span class="lg">10</span><span class="y">){</span>
            <span class="g">/* kod */</span>
            <span class="lb">i</span>++;
        <span class="y">}</span>
        </code>
    </pre>
    </div><br>

    <h3>Pętla do...while</h3>
    <p>
        Trzecią pętlą jest do...while.<br>
        Jest to pętla podobna do while, ale zawsze wykona się przynajmniej jeden raz,<br>
        ponieważ warunek jest sprawdzany <b>po pierwszym wykonaniu bloku</b>.
    </p>
    <p>Przykład:</p>
    <div class="kod">
    <pre>
        <code>
        <span class="b">let</span> <span class="lb">i</span> = <span class="lg">0</span>;
        <span class="p">do</span><span class="y">{</span>
            <span class="lb">i</span>++;
            <span class="g">/* kod */</span>
        <span class="y">}</span><span class="p">while</span><span class="y">(</span><span class="lb">i</span> < <span class="lg">10</span><span class="y">)</span>;
        </code>
    </pre>
    </div><br>
    <p>Czas trochę teraz poćwiczyć ;)</p>
`;

let artykul2zadania = `
    <h2>PĘTLE W JS - ZADANIA</h2>
    <p><b>Zadanie 1:</b></p>
    <p>Wykonaj pętle "for", która wypisze liczby od 9 do 0.</p><br>
    <p><b>Zadanie 2:</b></p>
    <p>Wykonaj pętle "while", która wypisze liczby parzyste z przedziału od 2 do 20.</p><br>
    <p><b>Zadanie 3:</b></p>
    <p>Co wypisze konsola?</p>
    <div class="kod">
    <pre>
        <code>
        <span class="b">let</span> <span class="lb">a</span> = <span class="lr">"A"</span>;
        <span class="p">for</span><span class="y">(</span><span class="b">let</span> <span class="lb">i</span> = <span class="lg">5</span>; <span class="lb">i</span> > <span class ="lg">1</span>; <span class="lb">i</span>--<span class="y">){</span>
            <span class="lb">a</span> += <span class="lr">"A"</span>;
        <span class="y">}</span>
        <span class="lb">console</span>.<span class="ly">log</span><span class="y">(<span class="lb">a</span>)</span>;
        </code>
    </pre>
    </div><br>
    <p><b>Zadanie 4:</b></p>
    <p>Ile razy wykona się pętla i co zostanie wypisane w konsoli?</p>
    <div class="kod">
    <pre>
        <code>
        <span class="b">let</span> <span class="lb">i</span> = <span class="lg">0</span>;
        <span class="p">while</span><span class="y">(</span><span class="lb">i</span> <= <span class="lg">10</span><span class="y">){</span>
            <span class="p">if</span><span class="y">(</span><span class="lb">i</span> % <span class="lg">2</span> == <span class="lg">1</span><span class="y">){</span>
                <span class="lb">console</span>.<span class="ly">log</span><span class="y">(<span class="lb">i</span>)</span>;
            <span class="y">}</span>
            <span class="lb">i</span>++;
        <span class="y">}</span>    
        </code>
    </pre>
    </div><br>
    <p><b>Zadanie 5:</b></p>
    <p>Co zostanie wypisane w konsoli?</p>
    <div class="kod">
    <pre>
        <code>
        <span class="b">let</span> <span class="lb">i</span> = <span class="lg">5</span>;
        <span class="p">do</span> <span class="y">{</span>
            <span class="lb">i</span> *= <span class="lg">5</span>;
        <span class="y">}</span> <span class="p">while</span> <span class="y">(</span><span class="lb">i</span> <= <span class="lg">125</span><span class="y">)</span>
        <span class="lb">console</span>.<span class="ly">log</span><span class="y">(<span class="lb">i</span>)</span>;
        </code>
    </pre>
    </div><br>
    <p><b>Zadanie 6:</b></p>
    <p>
        Napisz pętle, która wygeneruje i wyświetli w konsoli<br>
        pełną tabliczkę mnożenia dla liczb od 1 do 10.<br>
        Wynik powinien być wyświetlony w formacie:<br>
    </p>
    <p>
        1 * 1 = 1<br>
        1 * 2 = 2<br>
        <b>...</b><br>
        10 * 10 = 100<br>
    </p><br>
`;

const artykul = document.getElementById("artykul");
const fs_button = document.getElementById("fs_button");
const ll_button = document.getElementById("ll_button");
const ll_z_button = document.getElementById("ll_z_button");
artykul.innerHTML = artykul1;

let ee_p = 0;
function ester_egg(){
    if(ee_p == 0){
        document.getElementById("h1").innerHTML = "Naucz się JAVA SCRIPT <span class='r'>BRUDASIE</span>";
        ee_p++;
    }else{
        document.getElementById("h1").innerHTML = "Naucz się JAVA SCRIPT";
        ee_p--;
    }
}

function for_start(){
    artykul.innerHTML = artykul1;
    fs_button.className = "wcisniety"
    ll_button.className = "";
    ll_z_button.className = "";
    ll_z_button.style.display = "none";
}

function lesson_loops(){
    artykul.innerHTML = artykul2;
    fs_button.className = ""
    ll_button.className = "wcisniety";
    ll_z_button.className = "";
    ll_z_button.style.display = "block";
}

function lesson_loops_zadania(){
    artykul.innerHTML = artykul2zadania;
    fs_button.className = ""
    ll_button.className = ""
    ll_z_button.className = "wcisniety";
}