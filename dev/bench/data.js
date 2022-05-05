window.BENCHMARK_DATA = {
  "lastUpdate": 1651768025040,
  "repoUrl": "https://github.com/zcash/halo2",
  "entries": {
    "halo2 Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jack@electriccoin.co",
            "name": "str4d",
            "username": "str4d"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b2e2b9b08125d806cb5836bd7c7dea0955febca5",
          "message": "Merge pull request #568 from zcash/circuit-review\n\nChanges from Orchard circuit review",
          "timestamp": "2022-05-05T16:03:31+01:00",
          "tree_id": "f78c68a981c6348eaa76a08589aa718de3d09f22",
          "url": "https://github.com/zcash/halo2/commit/b2e2b9b08125d806cb5836bd7c7dea0955febca5"
        },
        "date": 1651766815157,
        "tool": "cargo",
        "benches": [
          {
            "name": "WIDTH = 3, RATE = 2-prover",
            "value": 77460989,
            "range": "± 6496956",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 3, RATE = 2-verifier",
            "value": 3377097,
            "range": "± 62473",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-prover",
            "value": 176434382,
            "range": "± 6917323",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-verifier",
            "value": 4917415,
            "range": "± 57139",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-prover",
            "value": 242688040,
            "range": "± 1438665",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-verifier",
            "value": 6005402,
            "range": "± 161293",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon/2-to-1",
            "value": 36584,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/510",
            "value": 141707,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/510",
            "value": 153950,
            "range": "± 812",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/510",
            "value": 251688,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/510",
            "value": 251686,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/520",
            "value": 144677,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/520",
            "value": 156883,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/520",
            "value": 254556,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/520",
            "value": 254607,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/1086",
            "value": 302667,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/1086",
            "value": 315013,
            "range": "± 385",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/1086",
            "value": 412822,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/1086",
            "value": 412813,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "double-and-add",
            "value": 3267599,
            "range": "± 1549",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/14",
            "value": 5938277,
            "range": "± 5866",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/15",
            "value": 10939923,
            "range": "± 205603",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/16",
            "value": 22089666,
            "range": "± 110062",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/17",
            "value": 41356081,
            "range": "± 519595",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/18",
            "value": 83244427,
            "range": "± 285000",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/3",
            "value": 14542,
            "range": "± 414",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/4",
            "value": 16765,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/5",
            "value": 20626,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/6",
            "value": 28368,
            "range": "± 320",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/7",
            "value": 44994,
            "range": "± 1167",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/8",
            "value": 80404,
            "range": "± 416",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/9",
            "value": 155300,
            "range": "± 1228",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/10",
            "value": 312634,
            "range": "± 17527",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/11",
            "value": 655242,
            "range": "± 12907",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/12",
            "value": 1408417,
            "range": "± 52437",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/13",
            "value": 2977695,
            "range": "± 98197",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/14",
            "value": 6264310,
            "range": "± 79445",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/15",
            "value": 13216829,
            "range": "± 444638",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/16",
            "value": 28416923,
            "range": "± 315446",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/17",
            "value": 60643221,
            "range": "± 1081873",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/18",
            "value": 125571391,
            "range": "± 818288",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Pallas",
            "value": 28442,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Vesta",
            "value": 28541,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/8",
            "value": 192764490,
            "range": "± 435554",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/9",
            "value": 407426712,
            "range": "± 1581840",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/10",
            "value": 867297101,
            "range": "± 940235",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/11",
            "value": 1838654865,
            "range": "± 6041659",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/12",
            "value": 3901530930,
            "range": "± 9221286",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/13",
            "value": 8234894769,
            "range": "± 6515957",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/14",
            "value": 17386895421,
            "range": "± 25348047",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/15",
            "value": 36609735722,
            "range": "± 93456335",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/16",
            "value": 76928299842,
            "range": "± 57078416",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/8",
            "value": 97040301,
            "range": "± 556064",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/9",
            "value": 167572355,
            "range": "± 821832",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/10",
            "value": 299603497,
            "range": "± 4384221",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/11",
            "value": 545172045,
            "range": "± 2585399",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/12",
            "value": 1022249361,
            "range": "± 2933325",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/13",
            "value": 1929212828,
            "range": "± 12015638",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/14",
            "value": 3671174135,
            "range": "± 9815353",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/15",
            "value": 7086880651,
            "range": "± 26413090",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/16",
            "value": 13678229701,
            "range": "± 34940718",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/8",
            "value": 5197126,
            "range": "± 31481",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/9",
            "value": 8005070,
            "range": "± 119710",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/10",
            "value": 12803202,
            "range": "± 126977",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/11",
            "value": 22011204,
            "range": "± 133203",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/12",
            "value": 37880042,
            "range": "± 270639",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/13",
            "value": 66365966,
            "range": "± 498946",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/14",
            "value": 120335946,
            "range": "± 305457",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/15",
            "value": 222340225,
            "range": "± 2586819",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/16",
            "value": 402977440,
            "range": "± 2148433",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jack@electriccoin.co",
            "name": "str4d",
            "username": "str4d"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "377de3998cdedcc677dc8d22996c75e19063ba25",
          "message": "Merge pull request #554 from zcash/dependabot/github_actions/codecov/codecov-action-3.1.0\n\nBump codecov/codecov-action from 2.1.0 to 3.1.0",
          "timestamp": "2022-05-05T16:07:57+01:00",
          "tree_id": "78b216fd0dfbd40891753e95cfc0ca850a4d9634",
          "url": "https://github.com/zcash/halo2/commit/377de3998cdedcc677dc8d22996c75e19063ba25"
        },
        "date": 1651767103966,
        "tool": "cargo",
        "benches": [
          {
            "name": "WIDTH = 3, RATE = 2-prover",
            "value": 75489846,
            "range": "± 3743790",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 3, RATE = 2-verifier",
            "value": 3386860,
            "range": "± 63979",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-prover",
            "value": 178154458,
            "range": "± 1093975",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-verifier",
            "value": 4971793,
            "range": "± 29251",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-prover",
            "value": 242996649,
            "range": "± 1647918",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-verifier",
            "value": 6005151,
            "range": "± 41542",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon/2-to-1",
            "value": 36582,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/510",
            "value": 141832,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/510",
            "value": 153932,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/510",
            "value": 246733,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/510",
            "value": 246801,
            "range": "± 423",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/520",
            "value": 144810,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/520",
            "value": 157034,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/520",
            "value": 249821,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/520",
            "value": 249750,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/1086",
            "value": 302941,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/1086",
            "value": 315141,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/1086",
            "value": 407654,
            "range": "± 477",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/1086",
            "value": 407865,
            "range": "± 444",
            "unit": "ns/iter"
          },
          {
            "name": "double-and-add",
            "value": 2906468,
            "range": "± 16312",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/14",
            "value": 5863915,
            "range": "± 13278",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/15",
            "value": 10168610,
            "range": "± 46523",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/16",
            "value": 22590124,
            "range": "± 253053",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/17",
            "value": 43345264,
            "range": "± 387818",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/18",
            "value": 83091585,
            "range": "± 258616",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/3",
            "value": 14697,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/4",
            "value": 17013,
            "range": "± 284",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/5",
            "value": 20976,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/6",
            "value": 28931,
            "range": "± 1213",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/7",
            "value": 45175,
            "range": "± 671",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/8",
            "value": 80768,
            "range": "± 802",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/9",
            "value": 156602,
            "range": "± 11433",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/10",
            "value": 315704,
            "range": "± 30309",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/11",
            "value": 660840,
            "range": "± 18601",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/12",
            "value": 1421851,
            "range": "± 54756",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/13",
            "value": 3007989,
            "range": "± 66538",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/14",
            "value": 6294840,
            "range": "± 95147",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/15",
            "value": 13369932,
            "range": "± 162516",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/16",
            "value": 28600651,
            "range": "± 565965",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/17",
            "value": 61134967,
            "range": "± 1018020",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/18",
            "value": 126957490,
            "range": "± 6267834",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Pallas",
            "value": 28463,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Vesta",
            "value": 28550,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/8",
            "value": 193143986,
            "range": "± 585942",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/9",
            "value": 408493313,
            "range": "± 943557",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/10",
            "value": 868603679,
            "range": "± 990191",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/11",
            "value": 1844027500,
            "range": "± 1958089",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/12",
            "value": 3903828160,
            "range": "± 10272750",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/13",
            "value": 8253285580,
            "range": "± 17165884",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/14",
            "value": 17424850451,
            "range": "± 22495501",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/15",
            "value": 36680476442,
            "range": "± 75208987",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/16",
            "value": 76995120563,
            "range": "± 184328483",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/8",
            "value": 97526502,
            "range": "± 905168",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/9",
            "value": 168916650,
            "range": "± 584104",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/10",
            "value": 301031181,
            "range": "± 1042850",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/11",
            "value": 546855800,
            "range": "± 2606789",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/12",
            "value": 1022954599,
            "range": "± 3591186",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/13",
            "value": 1943698771,
            "range": "± 15312493",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/14",
            "value": 3695223438,
            "range": "± 10120067",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/15",
            "value": 7154945665,
            "range": "± 14592710",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/16",
            "value": 13789981755,
            "range": "± 37083683",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/8",
            "value": 5238521,
            "range": "± 54506",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/9",
            "value": 8068605,
            "range": "± 77469",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/10",
            "value": 13143389,
            "range": "± 180369",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/11",
            "value": 22221306,
            "range": "± 153741",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/12",
            "value": 37867130,
            "range": "± 463951",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/13",
            "value": 66507249,
            "range": "± 710595",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/14",
            "value": 120511954,
            "range": "± 1746880",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/15",
            "value": 222172315,
            "range": "± 19292994",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/16",
            "value": 404786823,
            "range": "± 1723852",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jack@electriccoin.co",
            "name": "str4d",
            "username": "str4d"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "72ff677776504c288f4927a6ce8d3c273ebd588d",
          "message": "Merge pull request #511 from zcash/dependabot/github_actions/actions/checkout-3\n\nBump actions/checkout from 2 to 3",
          "timestamp": "2022-05-05T16:08:26+01:00",
          "tree_id": "971be894517d18d626ca5633e10ff1049f39a351",
          "url": "https://github.com/zcash/halo2/commit/72ff677776504c288f4927a6ce8d3c273ebd588d"
        },
        "date": 1651768020206,
        "tool": "cargo",
        "benches": [
          {
            "name": "WIDTH = 3, RATE = 2-prover",
            "value": 95706018,
            "range": "± 5243088",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 3, RATE = 2-verifier",
            "value": 4375915,
            "range": "± 218302",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-prover",
            "value": 212149338,
            "range": "± 8836383",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-verifier",
            "value": 5961610,
            "range": "± 339752",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-prover",
            "value": 296578079,
            "range": "± 12618158",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-verifier",
            "value": 7347564,
            "range": "± 374799",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon/2-to-1",
            "value": 46648,
            "range": "± 4564",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/510",
            "value": 184463,
            "range": "± 17977",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/510",
            "value": 199467,
            "range": "± 16822",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/510",
            "value": 319245,
            "range": "± 16744",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/510",
            "value": 312102,
            "range": "± 12261",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/520",
            "value": 170372,
            "range": "± 10551",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/520",
            "value": 201087,
            "range": "± 15315",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/520",
            "value": 315934,
            "range": "± 15103",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/520",
            "value": 317583,
            "range": "± 13080",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/1086",
            "value": 378069,
            "range": "± 15406",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/1086",
            "value": 403102,
            "range": "± 18405",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/1086",
            "value": 530463,
            "range": "± 25772",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/1086",
            "value": 529461,
            "range": "± 25907",
            "unit": "ns/iter"
          },
          {
            "name": "double-and-add",
            "value": 4195976,
            "range": "± 149651",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/14",
            "value": 7666716,
            "range": "± 188018",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/15",
            "value": 13124670,
            "range": "± 202445",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/16",
            "value": 30537854,
            "range": "± 671739",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/17",
            "value": 58008802,
            "range": "± 1472620",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/18",
            "value": 112446211,
            "range": "± 8956766",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/3",
            "value": 19203,
            "range": "± 1752",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/4",
            "value": 22366,
            "range": "± 1192",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/5",
            "value": 27824,
            "range": "± 1983",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/6",
            "value": 37745,
            "range": "± 3389",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/7",
            "value": 59642,
            "range": "± 2964",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/8",
            "value": 103568,
            "range": "± 8131",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/9",
            "value": 203479,
            "range": "± 28613",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/10",
            "value": 398619,
            "range": "± 26574",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/11",
            "value": 857681,
            "range": "± 85488",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/12",
            "value": 1879179,
            "range": "± 169121",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/13",
            "value": 3851810,
            "range": "± 209527",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/14",
            "value": 8166728,
            "range": "± 731179",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/15",
            "value": 17046699,
            "range": "± 994488",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/16",
            "value": 37189913,
            "range": "± 2178575",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/17",
            "value": 77725269,
            "range": "± 4587829",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/18",
            "value": 164374839,
            "range": "± 9662987",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Pallas",
            "value": 35197,
            "range": "± 1837",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Vesta",
            "value": 35502,
            "range": "± 1318",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/8",
            "value": 261966723,
            "range": "± 15376689",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/9",
            "value": 535292520,
            "range": "± 7592137",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/10",
            "value": 1139382270,
            "range": "± 26570411",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/11",
            "value": 2421488378,
            "range": "± 28868507",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/12",
            "value": 5100201678,
            "range": "± 35245652",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/13",
            "value": 10905967810,
            "range": "± 259775731",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/14",
            "value": 22792131006,
            "range": "± 323153807",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/15",
            "value": 47778623248,
            "range": "± 583519910",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/16",
            "value": 100181442253,
            "range": "± 1504436228",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/8",
            "value": 130406400,
            "range": "± 4500488",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/9",
            "value": 224653542,
            "range": "± 3723092",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/10",
            "value": 398529080,
            "range": "± 14660666",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/11",
            "value": 712501725,
            "range": "± 9238140",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/12",
            "value": 1335233899,
            "range": "± 31327690",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/13",
            "value": 2549314496,
            "range": "± 52554236",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/14",
            "value": 4646674384,
            "range": "± 53362597",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/15",
            "value": 9219252926,
            "range": "± 182315274",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/16",
            "value": 17047916259,
            "range": "± 494408992",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/8",
            "value": 6344306,
            "range": "± 301521",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/9",
            "value": 9998813,
            "range": "± 604486",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/10",
            "value": 16086399,
            "range": "± 1328843",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/11",
            "value": 28318643,
            "range": "± 1346930",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/12",
            "value": 45795158,
            "range": "± 2152201",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/13",
            "value": 81042023,
            "range": "± 5367613",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/14",
            "value": 144502416,
            "range": "± 5798548",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/15",
            "value": 274635371,
            "range": "± 12593625",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/16",
            "value": 517039144,
            "range": "± 15700921",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}