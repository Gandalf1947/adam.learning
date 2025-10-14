console.log("main.js started")
let artykul1 = `
    <h2>NA POCZĄTEK</h2>

    <p>
        Na początek najlepiej obejrzeć filmy z kanału <a href="https://www.youtube.com/@Pasjainformatyki">Pasja informatyki</a>.<br>
        Dużo wyjaśnia bo ta strona została tylko stworzona w celach pracy na lekcji i raczej nie będzie kontunowana.
    </p>
`;

let artykul2 = `
    <h2>PĘTLE W JS</h2>

    <p>Na tej lekcji nauczysz się krozystać z podstawowych pętli w języku JAVASCIRPT</p><br>
    <h3>Pętla for</h3>
    <p>
        Pierwszą pętlą jest for. Jest to najczęściej używana pętla.<br>
        Umożliwia precyzyją kontrolę nad liczbą iteracji dzięki trzem wyrażeniom:<br>
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
        Drugą pętlą jest while. Wykonuje ona zawarty w niej kod <b>dopóki</b> okreslony warunek jest prawdziwy.<br>
        Warunek jest sprawdzany <b>przed każym</b> wykonaniem kodu.
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
        Jest to pętla podobna do while, ale zawsze wykona się prznajmniej jeden raz,<br>
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
    <p><a href="" download>Czas trochę poćwiczyć ;)</a></p>
`;

const artykul = document.getElementById("artykul");
const fs_button = document.getElementById("fs_button");
const ll_button = document.getElementById("ll_button");
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
}

function lesson_loops(){
    artykul.innerHTML = artykul2;
    fs_button.className = ""
    ll_button.className = "wcisniety";
}