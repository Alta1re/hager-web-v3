import React, { useEffect } from "react";

import eRechtSiegel from "assets/icons/erecht24-siegel-datenschutzerklaerung-blau.png";

import classes from "./Privacy.module.css";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.Container}>
      <img
        src={eRechtSiegel}
        alt="eRecht-24 Siegel Datenschutz"
        width="150px"
        className={classes.ERecht}
      />
      <h1>Datenschutz­erklärung</h1>
      <h2>1. Datenschutz auf einen Blick</h2>
      <h3>Allgemeine Hinweise</h3>{" "}
      <p>
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
        Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
        Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
        identifiziert werden können. Ausführliche Informationen zum Thema
        Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
        Datenschutzerklärung.
      </p>
      <h3>Datenerfassung auf dieser Website</h3>{" "}
      <h4>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>{" "}
      <p>
        Die Datenverarbeitung auf dieser Website erfolgt durch den
        Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser
        Website entnehmen.
      </p>{" "}
      <h4>Wie erfassen wir Ihre Daten?</h4>{" "}
      <p>
        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
        mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein
        Kontaktformular eingeben.
      </p>{" "}
      <p>
        Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch
        der Website durch unsere IT-Systeme erfasst. Das sind vor allem
        technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des
        Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald
        Sie diese Website betreten.
      </p>{" "}
      <h4>Wofür nutzen wir Ihre Daten?</h4>{" "}
      <p>
        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der
        Website zu gewährleisten. Andere Daten können zur Analyse Ihres
        Nutzerverhaltens verwendet werden.
      </p>{" "}
      <h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>{" "}
      <p>
        Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
        Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
        erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung
        dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
        Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit
        für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
        bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
        personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
        Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
      </p>{" "}
      <p>
        Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich
        jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
      </p>
      <h3>Analyse-Tools und Tools von Dritt­anbietern</h3>{" "}
      <p>
        Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
        ausgewertet werden. Das geschieht vor allem mit sogenannten
        Analyseprogrammen.
      </p>{" "}
      <p>
        Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der
        folgenden Datenschutzerklärung.
      </p>
      <h2>2. Hosting und Content Delivery Networks (CDN)</h2>
      <h3>Externes Hosting</h3>{" "}
      <p>
        Diese Website wird bei einem externen Dienstleister gehostet (Hoster).
        Die personenbezogenen Daten, die auf dieser Website erfasst werden,
        werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.
        a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
        Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten,
        die über eine Website generiert werden, handeln.
      </p>{" "}
      <p>
        Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung
        gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1
        lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten
        Bereitstellung unseres Online-Angebots durch einen professionellen
        Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
      </p>{" "}
      <p>
        Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur
        Erfüllung seiner Leistungspflichten erforderlich ist und unsere
        Weisungen in Bezug auf diese Daten befolgen.
      </p>{" "}
      <p>Wir setzen folgenden Hoster ein:</p>
      <p>
        Alfahosting GmbH
        <br />
        Ankerstraße 3b
        <br />
        06108 Halle (Saale)
        <br />
        Deutschland
      </p>
      <h4>Abschluss eines Vertrages über Auftragsverarbeitung</h4>{" "}
      <p>
        Um die datenschutzkonforme Verarbeitung zu gewährleisten, haben wir
        einen Vertrag über Auftragsverarbeitung mit unserem Hoster geschlossen.
      </p>
      <h2>3. Allgemeine Hinweise und Pflicht­informationen</h2>
      <h3>Datenschutz</h3>{" "}
      <p>
        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
        sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
        entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
        Datenschutzerklärung.
      </p>{" "}
      <p>
        Wenn Sie diese Website benutzen, werden verschiedene personenbezogene
        Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
        persönlich identifiziert werden können. Die vorliegende
        Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir
        sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
      </p>{" "}
      <p>
        Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei
        der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
        lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
        möglich.
      </p>
      <h3>Hinweis zur verantwortlichen Stelle</h3>{" "}
      <p>
        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website
        ist:
      </p>{" "}
      <p>
        hager-web.com
        <br />
        Sven Hager
        <br />
        Hugostr. 12 <br />
        42281 Wuppertal
      </p>
      <p>
        Telefon: 020257495936
        <br />
        E-Mail: info@hager-web.com
      </p>
      <p>
        Verantwortliche Stelle ist die natürliche oder juristische Person, die
        allein oder gemeinsam mit anderen über die Zwecke und Mittel der
        Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen
        o. Ä.) entscheidet.
      </p>
      <h3>Speicherdauer</h3>{" "}
      <p>
        Soweit innerhalb dieser Datenschutzerklärung keine speziellere
        Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei
        uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
        berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur
        Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir
        keinen anderen rechtlich zulässigen  Gründe für die Speicherung Ihrer
        personenbezogenen Daten haben (z.B. steuer- oder handelsrechtliche
        Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach
        Fortfall dieser Gründe.
      </p>
      <h3>Hinweis zur Datenweitergabe in die USA</h3>{" "}
      <p>
        Auf unserer Website sind unter anderem Tools von Unternehmen mit Sitz in
        den USA eingebunden. Wenn diese Tools aktiv sind, können Ihre
        personenbezogenen Daten an die US-Server der jeweiligen Unternehmen
        weitergegeben werden. Wir weisen darauf hin, dass die USA kein sicherer
        Drittstaat im Sinne des EU-Datenschutzrechts sind. US-Unternehmen sind
        dazu verpflichtet, personenbezogene Daten an Sicherheitsbehörden
        herauszugeben, ohne dass Sie als Betroffener hiergegen gerichtlich
        vorgehen könnten. Es kann daher nicht ausgeschlossen werden, dass
        US-Behörden (z.B. Geheimdienste) Ihre auf US-Servern befindlichen Daten
        zu Überwachungszwecken verarbeiten, auswerten und dauerhaft speichern.
        Wir haben auf diese Verarbeitungstätigkeiten keinen Einfluss.
      </p>
      <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>{" "}
      <p>
        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
        Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
        jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
        Datenverarbeitung bleibt vom Widerruf unberührt.
      </p>
      <h3>
        Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie
        gegen Direktwerbung (Art. 21 DSGVO)
      </h3>{" "}
      <p>
        WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F
        DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS
        IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER
        PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN
        AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE
        RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE
        DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR
        IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI
        DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG
        NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER
        DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG
        VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
      </p>{" "}
      <p>
        WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU
        BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE
        VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE
        DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT
        ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE
        WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT
        MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21
        ABS. 2 DSGVO).
      </p>
      <h3>Beschwerde­recht bei der zuständigen Aufsichts­behörde</h3>{" "}
      <p>
        Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
        Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
        Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder
        des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht
        unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher
        Rechtsbehelfe.
      </p>
      <h3>Recht auf Daten­übertrag­barkeit</h3>{" "}
      <p>
        Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
        oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder
        an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen
        zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen
        Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch
        machbar ist.
      </p>
      <h3>SSL- bzw. TLS-Verschlüsselung</h3>{" "}
      <p>
        Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
        vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die
        Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
        TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran,
        dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt
        und an dem Schloss-Symbol in Ihrer Browserzeile.
      </p>{" "}
      <p>
        Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten,
        die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
      </p>
      <h3>Auskunft, Löschung und Berichtigung</h3>{" "}
      <p>
        Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
        das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
        personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
        Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung
        dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene
        Daten können Sie sich jederzeit unter der im Impressum angegebenen
        Adresse an uns wenden.
      </p>
      <h3>Recht auf Einschränkung der Verarbeitung</h3>{" "}
      <p>
        Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
        personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit
        unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf
        Einschränkung der Verarbeitung besteht in folgenden Fällen:
      </p>{" "}
      <ul>
        {" "}
        <li>
          Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen
          Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu
          überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die
          Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
          verlangen.
        </li>{" "}
        <li>
          Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig
          geschah/geschieht, können Sie statt der Löschung die Einschränkung der
          Datenverarbeitung verlangen.
        </li>{" "}
        <li>
          Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie
          jedoch zur Ausübung, Verteidigung oder Geltendmachung von
          Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung
          die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
          verlangen.
        </li>{" "}
        <li>
          Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben,
          muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen
          werden. Solange noch nicht feststeht, wessen Interessen überwiegen,
          haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen.
        </li>{" "}
      </ul>{" "}
      <p>
        Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt
        haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit
        Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung
        von Rechtsansprüchen oder zum Schutz der Rechte einer anderen
        natürlichen oder juristischen Person oder aus Gründen eines wichtigen
        öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats
        verarbeitet werden.
      </p>
      <h2>4. Datenerfassung auf dieser Website</h2>
      <h3>Cookies</h3>{" "}
      <p>
        Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind
        kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie
        werden entweder vorübergehend für die Dauer einer Sitzung
        (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät
        gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch
        gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis
        Sie diese selbst löschen oder eine automatische Löschung durch Ihren
        Webbrowser erfolgt.
      </p>{" "}
      <p>
        Teilweise können auch Cookies von Drittunternehmen auf Ihrem Endgerät
        gespeichert werden, wenn Sie unsere Seite betreten
        (Third-Party-Cookies). Diese ermöglichen uns oder Ihnen die Nutzung
        bestimmter Dienstleistungen des Drittunternehmens (z.B. Cookies zur
        Abwicklung von Zahlungsdienstleistungen).
      </p>{" "}
      <p>
        Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch
        notwendig, da bestimmte Websitefunktionen ohne diese nicht funktionieren
        würden (z.B. die Warenkorbfunktion oder die Anzeige von Videos). Andere
        Cookies dienen dazu, das Nutzerverhalten auszuwerten oder Werbung
        anzuzeigen.
      </p>{" "}
      <p>
        Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs
        (notwendige Cookies) oder zur Bereitstellung bestimmter, von Ihnen
        erwünschter Funktionen (funktionale Cookies, z. B. für die
        Warenkorbfunktion) oder zur Optimierung der Website (z.B. Cookies zur
        Messung des Webpublikums) erforderlich sind, werden auf Grundlage von
        Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere
        Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein
        berechtigtes Interesse an der Speicherung von Cookies zur technisch
        fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine
        Einwilligung zur Speicherung von Cookies abgefragt wurde, erfolgt die
        Speicherung der betreffenden Cookies ausschließlich auf Grundlage dieser
        Einwilligung (Art. 6 Abs. 1 lit. a DSGVO); die Einwilligung ist
        jederzeit widerrufbar.
      </p>{" "}
      <p>
        Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
        Cookies informiert werden und Cookies nur im Einzelfall erlauben, die
        Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie
        das automatische Löschen der Cookies beim Schließen des Browsers
        aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität
        dieser Website eingeschränkt sein.
      </p>{" "}
      <p>
        Soweit Cookies von Drittunternehmen oder zu Analysezwecken eingesetzt
        werden, werden wir Sie hierüber im Rahmen dieser Datenschutzerklärung
        gesondert informieren und ggf. eine Einwilligung abfragen.
      </p>
      <h3>Server-Log-Dateien</h3>{" "}
      <p>
        Der Provider der Seiten erhebt und speichert automatisch Informationen
        in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns
        übermittelt. Dies sind:
      </p>{" "}
      <ul>
        {" "}
        <li>Browsertyp und Browserversion</li>{" "}
        <li>verwendetes Betriebssystem</li> <li>Referrer URL</li>{" "}
        <li>Hostname des zugreifenden Rechners</li>{" "}
        <li>Uhrzeit der Serveranfrage</li> <li>IP-Adresse</li>{" "}
      </ul>{" "}
      <p>
        Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
        vorgenommen.
      </p>{" "}
      <p>
        Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit.
        f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der
        technisch fehlerfreien Darstellung und der Optimierung seiner Website –
        hierzu müssen die Server-Log-Files erfasst werden.
      </p>
      <h3>Kontaktformular</h3>{" "}
      <p>
        Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
        Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen
        Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
        Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne
        Ihre Einwilligung weiter.
      </p>{" "}
      <p>
        Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
        lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
        zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
        erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
        unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
        gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
        Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
      </p>{" "}
      <p>
        Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns,
        bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung
        widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach
        abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche
        Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
      </p>
      <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>{" "}
      <p>
        Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre
        Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten
        (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns
        gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
        Einwilligung weiter.
      </p>{" "}
      <p>
        Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
        lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
        zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
        erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
        unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
        gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
        Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
      </p>{" "}
      <p>
        Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben
        bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
        Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
        (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende
        gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen
        – bleiben unberührt.
      </p>
      <h3>Kommunikation via WhatsApp</h3>{" "}
      <p>
        Für die Kommunikation mit unseren Kunden und sonstigen Dritten nutzen
        wir unter anderem den Instant-Messaging-Dienst WhatsApp. Anbieter ist
        die WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour,
        Dublin 2, Irland.
      </p>{" "}
      <p>
        Die Kommunikation erfolgt über eine Ende-zu-Ende-Verschlüsselung
        (Peer-to-Peer), die verhindert, dass WhatsApp oder sonstige Dritte
        Zugriff auf die Kommunikationsinhalte erlangen können. WhatsApp erhält
        jedoch Zugriff auf Metadaten, die im Zuge des Kommunikationsvorgangs
        entstehen (z.B. Absender, Empfänger und Zeitpunkt). Wir weisen ferner
        darauf hin, dass WhatsApp nach eigener Aussage, personenbezogene Daten
        seiner Nutzer mit seiner in den USA ansässigen Konzernmutter Facebook
        teilt. Weitere Details zur Datenverarbeitung finden Sie in der
        Datenschutzrichtlinie von WhatsApp unter:{" "}
        <a
          href="https://www.whatsapp.com/legal/#privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.whatsapp.com/legal/#privacy-policy
        </a>
        .
      </p>{" "}
      <p>
        Der Einsatz von WhatsApp erfolgt auf Grundlage unseres berechtigten
        Interesses an einer möglichst schnellen und effektiven Kommunikation mit
        Kunden, Interessenten und sonstigen Geschäfts- und Vertragspartnern
        (Art. 6 Abs. 1 S. 1 lit. f DSGVO). Sofern eine entsprechende
        Einwilligung abgefragt wurde, erfolgt die Datenverarbeitung
        ausschließlich auf Grundlage der Einwilligung; diese ist jederzeit mit
        Wirkung für die Zukunft widerrufbar.
      </p>{" "}
      <p>
        Die zwischen und auf WhatsApp ausgetauschten Kommunikationsinhalte
        verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
        Einwilligung zur Speicherung widerrufen oder der Zweck für die
        Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer
        Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere
        Aufbewahrungsfristen – bleiben unberührt.
      </p>
      <h2>5. Analyse-Tools und Werbung</h2>
      <h3>Google Analytics</h3>{" "}
      <p>
        Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics.
        Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow
        Street, Dublin 4, Irland.
      </p>{" "}
      <p>
        Google Analytics ermöglicht es dem Websitebetreiber, das Verhalten der
        Websitebesucher zu analysieren. Hierbei erhält der Websitebetreiber
        verschiedene Nutzungsdaten, wie z.B. Seitenaufrufe, Verweildauer,
        verwendete Betriebssysteme und Herkunft des Nutzers. Diese Daten werden
        von Google ggf. in einem Profil zusammengefasst, das dem jeweiligen
        Nutzer bzw. dessen Endgerät zugeordnet ist.
      </p>{" "}
      <p>
        Google Analytics verwendet Technologien, die die Wiedererkennung des
        Nutzers zum Zwecke der Analyse des Nutzerverhaltens ermöglichen (z.B.
        Cookies oder Device-Fingerprinting). Die von Google erfassten
        Informationen über die Benutzung dieser Website werden in der Regel an
        einen Server von Google in den USA übertragen und dort gespeichert.
      </p>{" "}
      <p>
        Die Nutzung dieses Analyse-Tools erfolgt auf Grundlage von Art. 6 Abs. 1
        lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der
        Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine
        Werbung zu optimieren. Sofern eine entsprechende Einwilligung abgefragt
        wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die
        Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a
        DSGVO; die Einwilligung ist jederzeit widerrufbar.
      </p>{" "}
      <p>
        Die Datenübertragung in die USA wird auf die Standardvertragsklauseln
        der EU-Kommission gestützt. Details finden Sie hier:{" "}
        <a
          href="https://privacy.google.com/businesses/controllerterms/mccs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://privacy.google.com/businesses/controllerterms/mccs/
        </a>
        .
      </p>{" "}
      <h4>IP Anonymisierung</h4>{" "}
      <p>
        Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert.
        Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten
        der Europäischen Union oder in anderen Vertragsstaaten des Abkommens
        über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA
        gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server
        von Google in den USA übertragen und dort gekürzt. Im Auftrag des
        Betreibers dieser Website wird Google diese Informationen benutzen, um
        Ihre Nutzung der Website auszuwerten, um Reports über die
        Websiteaktivitäten zusammenzustellen und um weitere mit der
        Websitenutzung und der Internetnutzung verbundene Dienstleistungen
        gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google
        Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit
        anderen Daten von Google zusammengeführt.
      </p>
      <h4>Browser Plugin</h4>{" "}
      <p>
        Sie können die Erfassung und Verarbeitung Ihrer Daten durch Google
        verhindern, indem Sie das unter dem folgenden Link verfügbare
        Browser-Plugin herunterladen und installieren:{" "}
        <a
          href="https://tools.google.com/dlpage/gaoptout?hl=de"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://tools.google.com/dlpage/gaoptout?hl=de
        </a>
        .
      </p>{" "}
      <p>
        Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics
        finden Sie in der Datenschutzerklärung von Google:{" "}
        <a
          href="https://support.google.com/analytics/answer/6004245?hl=de"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://support.google.com/analytics/answer/6004245?hl=de
        </a>
        .
      </p>
      <h4>Auftragsverarbeitung</h4>{" "}
      <p>
        Wir haben mit Google einen Vertrag zur Auftragsverarbeitung
        abgeschlossen und setzen die strengen Vorgaben der deutschen
        Datenschutzbehörden bei der Nutzung von Google Analytics vollständig um.
      </p>
      <h4>Speicherdauer</h4>{" "}
      <p>
        Bei Google gespeicherte Daten auf Nutzer- und Ereignisebene, die mit
        Cookies, Nutzerkennungen (z. B. User ID) oder Werbe-IDs (z. B.
        DoubleClick-Cookies, Android-Werbe-ID) verknüpft sind, werden nach 14
        Monaten anonymisiert bzw. gelöscht. Details hierzu ersehen Sie unter
        folgendem Link:{" "}
        <a
          href="https://support.google.com/analytics/answer/7667196?hl=de"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://support.google.com/analytics/answer/7667196?hl=de
        </a>
      </p>
      <h2>6. Plugins und Tools</h2>
      <h3>Font Awesome (lokales Hosting)</h3>{" "}
      <p>
        Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten Font
        Awesome. Font Awesome ist lokal installiert. Eine Verbindung zu Servern
        von Fonticons, Inc.  findet dabei nicht statt.
      </p>{" "}
      <p>
        Weitere Informationen zu Font Awesome finden Sie und in der
        Datenschutzerklärung für Font Awesome unter:{" "}
        <a
          href="https://fontawesome.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://fontawesome.com/privacy
        </a>
        .
      </p>
      <h3>Unsere Social–Media–Auftritte</h3>{" "}
      <h4>Datenverarbeitung durch soziale Netzwerke</h4>{" "}
      <p>
        Wir unterhalten öffentlich zugängliche Profile in sozialen Netzwerken.
        Die im Einzelnen von uns genutzten sozialen Netzwerke finden Sie weiter
        unten.
      </p>{" "}
      <p>
        Soziale Netzwerke wie Facebook, Twitter etc. können Ihr Nutzerverhalten
        in der Regel umfassend analysieren, wenn Sie deren Website oder eine
        Website mit integrierten Social-Media-Inhalten (z. B. Like-Buttons oder
        Werbebannern) besuchen. Durch den Besuch unserer Social-Media-Präsenzen
        werden zahlreiche datenschutzrelevante Verarbeitungsvorgänge ausgelöst.
        Im Einzelnen:
      </p>{" "}
      <p>
        Wenn Sie in Ihrem Social-Media-Account eingeloggt sind und unsere
        Social-Media-Präsenz besuchen, kann der Betreiber des
        Social-Media-Portals diesen Besuch Ihrem Benutzerkonto zuordnen. Ihre
        personenbezogenen Daten können unter Umständen aber auch dann erfasst
        werden, wenn Sie nicht eingeloggt sind oder keinen Account beim
        jeweiligen Social-Media-Portal besitzen. Diese Datenerfassung erfolgt in
        diesem Fall beispielsweise über Cookies, die auf Ihrem Endgerät
        gespeichert werden oder durch Erfassung Ihrer IP-Adresse.
      </p>{" "}
      <p>
        Mit Hilfe der so erfassten Daten können die Betreiber der
        Social-Media-Portale Nutzerprofile erstellen, in denen Ihre Präferenzen
        und Interessen hinterlegt sind. Auf diese Weise kann Ihnen
        interessenbezogene Werbung in- und außerhalb der jeweiligen
        Social-Media-Präsenz angezeigt werden. Sofern Sie über einen Account
        beim jeweiligen sozialen Netzwerk verfügen, kann die interessenbezogene
        Werbung auf allen Geräten angezeigt werden, auf denen Sie eingeloggt
        sind oder eingeloggt waren.
      </p>{" "}
      <p>
        Bitte beachten Sie außerdem, dass wir nicht alle Verarbeitungsprozesse
        auf den Social-Media-Portalen nachvollziehen können. Je nach Anbieter
        können daher ggf. weitere Verarbeitungsvorgänge von den Betreibern der
        Social-Media-Portale durchgeführt werden. Details hierzu entnehmen Sie
        den Nutzungsbedingungen und Datenschutzbestimmungen der jeweiligen
        Social-Media-Portale.
      </p>{" "}
      <h4>Rechtsgrundlage</h4>{" "}
      <p>
        Unsere Social-Media-Auftritte sollen eine möglichst umfassende Präsenz
        im Internet gewährleisten. Hierbei handelt es sich um ein berechtigtes
        Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO. Die von den sozialen
        Netzwerken initiierten Analyseprozesse beruhen ggf. auf abweichenden
        Rechtsgrundlagen, die von den Betreibern der sozialen Netzwerke
        anzugeben sind (z. B. Einwilligung im Sinne des Art. 6 Abs. 1 lit. a
        DSGVO).
      </p>{" "}
      <h4>Verantwortlicher und Geltendmachung von Rechten</h4>{" "}
      <p>
        Wenn Sie einen unserer Social-Media-Auftritte (z. B. Facebook) besuchen,
        sind wir gemeinsam mit dem Betreiber der Social-Media-Plattform für die
        bei diesem Besuch ausgelösten Datenverarbeitungsvorgänge verantwortlich.
        Sie können Ihre Rechte (Auskunft, Berichtigung, Löschung, Einschränkung
        der Verarbeitung, Datenübertragbarkeit und Beschwerde) grundsätzlich
        sowohl ggü. uns als auch ggü. dem Betreiber des jeweiligen
        Social-Media-Portals (z. B. ggü. Facebook) geltend machen.
      </p>{" "}
      <p>
        Bitte beachten Sie, dass wir trotz der gemeinsamen Verantwortlichkeit
        mit den Social-Media-Portal-Betreibern nicht vollumfänglich Einfluss auf
        die Datenverarbeitungsvorgänge der Social-Media-Portale haben. Unsere
        Möglichkeiten richten sich maßgeblich nach der Unternehmenspolitik des
        jeweiligen Anbieters.
      </p>{" "}
      <h4>Speicherdauer</h4>{" "}
      <p>
        Die unmittelbar von uns über die Social-Media-Präsenz erfassten Daten
        werden von unseren Systemen gelöscht, sobald der Zweck für ihre
        Speicherung entfällt, Sie uns zur Löschung auffordern, Ihre Einwilligung
        zur Speicherung widerrufen oder der Zweck für die Datenspeicherung
        entfällt. Gespeicherte Cookies verbleiben auf Ihrem Endgerät, bis Sie
        sie löschen. Zwingende gesetzliche Bestimmungen – insb.
        Aufbewahrungsfristen – bleiben unberührt.
      </p>{" "}
      <p>
        Auf die Speicherdauer Ihrer Daten, die von den Betreibern der sozialen
        Netzwerke zu eigenen Zwecken gespeichert werden, haben wir keinen
        Einfluss. Für Einzelheiten dazu informieren Sie sich bitte direkt bei
        den Betreibern der sozialen Netzwerke (z. B. in deren
        Datenschutzerklärung, siehe unten).
      </p>{" "}
      <h4>Soziale Netzwerke im Einzelnen</h4>
      <h5>Facebook</h5>{" "}
      <p>
        Wir verfügen über ein Profil bei Facebook. Anbieter dieses Dienstes ist
        die Facebook Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour,
        Dublin 2, Irland. Die erfassten Daten werden nach Aussage von Facebook
        auch in die USA und in andere Drittländer übertragen.
      </p>{" "}
      <p>
        Wir haben mit Facebook eine Vereinbarung über gemeinsame Verarbeitung
        (Controller Addendum) geschlossen. In dieser Vereinbarung wird
        festgelegt, für welche Datenverarbeitungsvorgänge wir bzw. Facebook
        verantwortlich ist, wenn Sie unsere Facebook-Page besuchen. Diese
        Vereinbarung können Sie unter folgendem Link einsehen:{" "}
        <a
          href="https://www.facebook.com/legal/terms/page_controller_addendum"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.facebook.com/legal/terms/page_controller_addendum
        </a>
        .
      </p>
      <p>
        <strong>
          Sie können Ihre Werbeeinstellungen selbstständig in Ihrem
          Nutzer-Account anpassen. Klicken Sie hierzu auf folgenden Link und
          loggen Sie sich ein:
        </strong>{" "}
        <a
          href="https://www.facebook.com/settings?tab=ads"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.facebook.com/settings?tab=ads
        </a>
        .
      </p>{" "}
      <p>
        Die Datenübertragung in die USA wird auf die Standardvertragsklauseln
        der EU-Kommission gestützt. Details finden Sie hier:{" "}
        <a
          href="https://www.facebook.com/legal/EU_data_transfer_addendum"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.facebook.com/legal/EU_data_transfer_addendum
        </a>{" "}
        und{" "}
        <a
          href="https://de-de.facebook.com/help/566994660333381"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://de-de.facebook.com/help/566994660333381
        </a>
        .
      </p>{" "}
      <p>
        Details entnehmen Sie der Datenschutzerklärung von Facebook:{" "}
        <a
          href="https://www.facebook.com/about/privacy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.facebook.com/about/privacy/
        </a>
        .
      </p>
      <h5>LinkedIn</h5>{" "}
      <p>
        Wir verfügen über ein Profil bei LinkedIn. Anbieter ist die LinkedIn
        Ireland Unlimited Company, Wilton Plaza, Wilton Place, Dublin 2, Irland.
        LinkedIn verwendet Werbecookies.
      </p>{" "}
      <p>
        <strong>
          Wenn Sie LinkedIn-Werbe-Cookies deaktivieren möchten, nutzen Sie bitte
          folgenden Link:{" "}
        </strong>
        <a
          href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out
        </a>
        .
      </p>{" "}
      <p>
        Die Datenübertragung in die USA wird auf die Standardvertragsklauseln
        der EU-Kommission gestützt. Details finden Sie hier:{" "}
        <a
          href="https://www.linkedin.com/legal/l/dpa"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.linkedin.com/legal/l/dpa
        </a>{" "}
        und{" "}
        <a
          href="https://www.linkedin.com/legal/l/eu-sccs"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.linkedin.com/legal/l/eu-sccs
        </a>
        .
      </p>{" "}
      <p>
        Details zu deren Umgang mit Ihren personenbezogenen Daten entnehmen Sie
        der Datenschutzerklärung von LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.linkedin.com/legal/privacy-policy
        </a>
        .
      </p>
    </div>
  );
};

export default Privacy;
