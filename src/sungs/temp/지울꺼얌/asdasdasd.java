package sungs.temp.지울꺼얌;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.regex.Pattern;

public class asdasdasd {

	static String searchWord(String word) {
		StringBuffer result = new StringBuffer(".*");

		result.append(word);

		result.append(".*");

		return result.toString();
	}

	static String[] searchArr(String word) {
		String[] arr = word.split(" ");
		List<String> list = new ArrayList<String>();

		for (String string : arr) {

			StringBuffer temp = new StringBuffer(".*");

			temp.append(string);

			temp.append(".*");

			list.add(temp.toString());
		}

		return list.toArray(new String[list.size()]);
	}

	public static void main(String[] args) {

		String search = searchWord("좋은 아침 !");
		System.out.println(search);

		String[] ss = searchArr("좋은 아침 입니다. ! 모두들 안녕!");
		System.out.println(Arrays.toString(ss));

		String savePath = "src/sungs/temp/지울꺼얌";
		String fileName = "asd.txt";

		String path = savePath + File.separator + fileName;

		System.out.println(path);

		File file = new File(path);

		System.out.println(file.length());

		boolean a = false;

		try {
			BufferedReader gr = new BufferedReader(new InputStreamReader(new FileInputStream(file)));

			while (gr.read() != -1) {

				String aaa = gr.readLine();

				for (String string : ss) {
					if (Pattern.matches(string, aaa)) {
						a = true;
						break;
					}
				}

			}

		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		System.out.println(a);

		if (a)
			System.out.println("검색성공");
			// 성공시 반환될 어레이에 푸시
		else
			System.out.println("검색 실패");
			// 실패시 ㅈㅅ

	}

}
