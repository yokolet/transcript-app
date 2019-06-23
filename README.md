## English to Katakana Transcription GraphQL App

This repository is a ReactJS GraphQL App for an Engish to Katakana Transcription, which is
developed in another repository, [https://github.com/yokolet/transcript](https://github.com/yokolet/transcript).
The [transcript](https://github.com/yokolet/transcript) repository is a place for the main logic of transcription.
The GraphQL endpoint is developed in [https://github.com/yokolet/transcript-web](https://github.com/yokolet/transcript-web)
repository. This ReactJS app is making a GraphQL request to [transcript-web](https://github.com/yokolet/transcript-web) endpoint.

The ReactJS App is live at [https://morning-lowlands-77742.herokuapp.com/](https://morning-lowlands-77742.herokuapp.com/).

### How to Use

Input English words, space, comma or newline separated or mixture of those in the left field.
Click the `Transcript` button, then the transcription(s) will show up on the right side.

If the word doesn't exist in the dictionary, `E_DIC` error code will be returned.
If the word caused a trouble to transcript, `E_KEY` error will be returned.

The dictionary has multiple pronunciations for some words. In such a case, multiple transcriptions will be returned.
It happens the same katakana transcripts show up for a single English word. A couple of reasons are there.
The dictionary may have the same IPA phonetics for the word just the difference of accent. Japanese sound doesn't have
an accent, so the accent symbol was removed in the pre-processing. The dictionary may have acutually different IPA phonetics. However, while processing vowels and consonants, those may have become the same.
Lastly, the dictionary may have had exactly the same IPA phonetics for the word.


The transcription logic is explained in the repository, [https://github.com/yokolet/transcript](https://github.com/yokolet/transcript). Please visit for the details of transcription.


## Develpment

### Installation

```bash
$ yarn install

or

$ npm install
```

### GraphQL Endpoint

The GraphQL endpoint should be set as environment variable, `REACT_APP_ENDPOINT`.
Set the parameter before running the app.

```bash
[bash example]

export REACT_APP_ENDPOINT=http://localhost:5000
```

### Start the node server

```bash
$ yarn start

or

$ npm start
```

The command above starts the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## URL

The app is live at:

- [https://morning-lowlands-77742.herokuapp.com/](https://morning-lowlands-77742.herokuapp.com/)


## Credits

Yoko Harada (@yokolet)

## License

The MIT License (MIT)

Copyright (c) 2019 Yoko Harada

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.