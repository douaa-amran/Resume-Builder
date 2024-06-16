package com.example.cvjsonapi;



import org.example.*;
import org.example.models.CVSInfo;
import org.w3c.dom.Document;

import java.util.Scanner;

public class Main {

    public static String extractCVSInfoAsJSON(String filePath, String fileName) throws Exception {
        String filePathWithName = filePath + "/" + fileName;
        String rawContent = XMLExtraction.extractRawContent(filePathWithName);

        if (ErrorHandling.isEuropassCV(rawContent)) {
            // Parse raw content into XML Document using XmlParser
            Document document = XmlParser.parseXml(rawContent);
            // Extract all information if the CV is Europass
            CVSInfo cvsInfo = CVSInfoBuilder.buildCVSInfo(document);

            if (cvsInfo != null) {
                return JsonConverter.convertCVSInfoToJSON(cvsInfo);
            } else {
                throw new Exception("Failed to extract personal information.");
            }
        } else {
            throw new Exception("CV type is not Europass. Cannot extract personal information.");
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Prompt the user for input
        System.out.print("Enter your path file here: ");
        String filePath = scanner.nextLine();

        System.out.print("Enter your file name here: ");
        String fileName = scanner.nextLine();

        // Close the scanner after you have finished reading input
        scanner.close();

        try {
            // Use the method to get the JSON as a String
            String json = extractCVSInfoAsJSON(filePath, fileName);
            System.out.println(json);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

