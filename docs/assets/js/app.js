(function() {
	const mockChat = document.getElementById('mockChat');
	const yearEl = document.getElementById('year');
	if (yearEl) yearEl.textContent = new Date().getFullYear();

	function addMockBubble(text, role) {
		if (!mockChat) return;
		const div = document.createElement('div');
		div.className = `bubble ${role}`;
		div.textContent = text;
		mockChat.appendChild(div);
	}

	// Seed the phone mock with a tiny example
	addMockBubble('Hi! I\'m your Smart Nutrition Assistant. How can I support your goals today?', 'ai');
	addMockBubble('Plan my week: 2,000 kcal/day, 140g protein, dairy-free.', 'me');
	addMockBubble('Great! I\'ll design a 7-day plan hitting 2,000 kcal with ~140g protein/day and dairy-free swaps. Ready to preview breakfast options?', 'ai');

	// Demo chat logic
	const form = document.getElementById('chatForm');
	const messages = document.getElementById('messages');
	const input = document.getElementById('userInput');

	function addMessage(text, who) {
		const div = document.createElement('div');
		div.className = `msg ${who}`;
		div.textContent = text;
		messages.appendChild(div);
		messages.scrollTop = messages.scrollHeight;
	}

	function respondTo(message) {
		const lower = message.toLowerCase();
		// Simple rules engine for demo
		if (/(protein|macro)/.test(lower)) {
			return 'Aim for 1.6–2.2 g/kg protein if strength training. I can tailor daily targets—share your weight and goals.';
		}
		if (/(diabet|glucose|sugar)/.test(lower)) {
			return 'For Type 2 diabetes, consider a Mediterranean or lower-carb pattern with fiber-rich carbs, lean protein, and healthy fats. Monitor post-meal glucose response.';
		}
		if (/(blood pressure|hypertension|sodium)/.test(lower)) {
			return 'A DASH-style approach emphasizing vegetables, fruits, legumes, low-sodium choices, and potassium-rich foods can support healthy blood pressure.';
		}
		if (/(kidney|ckd)/.test(lower)) {
			return 'CKD nutrition varies by stage. Typical strategies: moderate protein, control sodium, manage potassium/phosphorus as indicated by labs. Always consult your nephrologist.';
		}
		if (/(ibs|fodmap)/.test(lower)) {
			return 'Low-FODMAP can help IBS symptoms. Use an elimination phase (2–6 weeks) followed by structured reintroduction under dietitian guidance.';
		}
		if (/grocery|shopping/.test(lower)) {
			return 'Here\'s a sample grocery list: proteins (chicken, tofu, eggs), carbs (oats, quinoa, potatoes), produce (spinach, berries, broccoli), fats (olive oil, avocado), extras (spices).';
		}
		if (/breakfast|lunch|dinner|snack/.test(lower)) {
			return 'Sample day: Breakfast—overnight oats with chia and berries. Lunch—quinoa bowl with chickpeas and greens. Dinner—salmon, potatoes, broccoli. Snacks—Greek-style soy yogurt, almonds.';
		}
		if (/meal plan|7-day|week/.test(lower)) {
			return 'I can draft a 7-day plan based on your calories, protein target, and preferences. Tell me calories/day, protein target, and any exclusions.';
		}
		return 'I can help with meal plans, macros, grocery lists, and tailoring for conditions. Try: "Plan a 1,900 kcal day with 150g protein, dairy-free."';
	}

	// Register service worker for PWA/offline
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('service-worker.js').catch(() => {});
	}

	if (form && messages && input) {
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			const text = input.value.trim();
			if (!text) return;
			addMessage(text, 'user');
			input.value = '';
			setTimeout(() => {
				const reply = respondTo(text);
				addMessage(reply, 'ai');
			}, 400);
		});
	}

	function wireTapList(id) {
		const root = document.getElementById(id);
		if (!root) return;
		root.addEventListener('click', function(e) {
			const li = e.target.closest('li');
			if (!li) return;
			const text = li.getAttribute('data-text') || li.textContent;
			if (!input) return;
			input.value = text;
			input.focus();
		});
	}

	['goals', 'conditions', 'prompts'].forEach(wireTapList);
})();