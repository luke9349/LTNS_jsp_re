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

		// 파일을 담고 있는 list 로 쓸까? 그때 가서 자세한 내용을 알고 판단
		String savePath = "src/sungs/temp/지울꺼얌";
		String fileName = "asd.txt";

		String path = savePath + File.separator + fileName;

		System.out.println(path);

		File file = new File(path);

		System.out.println(file.length());

		boolean a = false;

		try {

			// 1. 쿼리문으로 반환된 파일들의 이름 들을 가진 배열이 있을 것임

			// 2. 반복문으로 계속 파일을 생성해서 스트림으로 뽑아서 검색어와 대조
			BufferedReader gr = new BufferedReader(new InputStreamReader(new FileInputStream(file)));

			while (gr.read() != -1) {

				String aaa = gr.readLine();

				System.out.println(aaa);

				for (String string : ss) {
					if (Pattern.matches(string, aaa)) {
						a = true;
						break;
					}
				}

				// 3. 검색어와 일치된 파일의 이름 을 뽑아서 또다른 리스트에 담음
				List<String> qwer = new ArrayList<String>();
				if (a) {
					System.out.println("파일명: " + file.getName());
					qwer.add(file.getName());
					a = false;
					break;
				}

				// 파일들을 담은 반목문 종료

				// 4. 3 => 뽑아낸 리스트를 가지고 스트림을 이용해서 다시 한줄한줄뽑아 text 형태로 저장한 List를 생성

				// 5. list 가 완성되면 반환 해서 반환받은 곳에서 반복문을 사용하여 DTO 컨텐츠 setting

			}

		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

}
